import { ReactNode, createContext, useContext } from 'react';
import { RootStore, RootStoreHydrateData } from './RootStore';

let store: RootStore;

export const StoreContext = createContext<RootStore | null>(null);

// function to initialize the store
function initializeStore(
  initialData?: RootStoreHydrateData
): RootStore {
  const _store = store ?? new RootStore();

  if (initialData) {
    _store.hydrate(initialData);
  }

  // For server side rendering always create a new store
  if (typeof window === 'undefined') return _store;

  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}

export function RootStoreProvider({
  children,
  hydratedData
}: {
  children: ReactNode;
  hydratedData: RootStoreHydrateData;
}) {
  // create the store
  const store = initializeStore(hydratedData);

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}

export function useGetStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw Error('Store is NOT registered properly!!');
  }

  return context;
}
