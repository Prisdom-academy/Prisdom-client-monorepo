import { Fragment, PropsWithChildren } from 'react';
import { IAuthStore } from '../interfaces';
import { Symbols } from '@prisdom/services/src/symbols';
import { useInjection } from 'store-sdk/injection.hook';

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
