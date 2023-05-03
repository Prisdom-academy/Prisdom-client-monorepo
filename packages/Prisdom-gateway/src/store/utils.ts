import { RootStoreHydrateData } from './RootStore';

export function setInitialDataForStore<T>(
  props: T,
  data: Partial<RootStoreHydrateData>
) {
  return {
    ...props,
    hydrationData: {
      ...data
    }
  };
}
