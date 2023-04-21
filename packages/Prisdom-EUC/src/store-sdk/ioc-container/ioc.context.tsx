import { Container } from 'inversify';
import { createContext, PropsWithChildren, useContext } from 'react';
import { Symbols } from './symbols';

const InversifyContext = createContext<{ container: Container | null }>({
  container: null
});

interface IProps extends PropsWithChildren<any> {
  container: Container;
}

export const IOCProvider = (props: IProps) => {
  return (
    <InversifyContext.Provider value={{ container: props.container }}>
      {props.children}
    </InversifyContext.Provider>
  );
};

export function useInjection<T>(identifier: Symbols) {
  const { container } = useContext(InversifyContext);
  if (!container) {
    throw new Error('Container is undefined!');
  }
  return container.get<T>(identifier);
}
