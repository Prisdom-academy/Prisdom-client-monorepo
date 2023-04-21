import { Fragment, PropsWithChildren } from 'react';
import { useInjection } from 'store-sdk/ioc-container/ioc.context';
import { Symbols } from 'store-sdk/ioc-container/symbols';
import { IAuthStore } from '../interfaces';

interface IAuthProps extends PropsWithChildren<any> {}

/**
 * This component only use for automating authentication
 * @param props
 * @returns
 */
export const AuthContainer = (props: IAuthProps) => {
  const authStore = useInjection<IAuthStore>(Symbols.IAuthStore);
  authStore.autoLogin();

  return <Fragment>{props.children}</Fragment>;
};
