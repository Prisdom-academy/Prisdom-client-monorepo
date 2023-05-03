export interface IHydatable<T> {
  hydrate(data: T): void;
}
