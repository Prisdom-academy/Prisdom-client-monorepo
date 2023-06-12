/* eslint-disable react-hooks/exhaustive-deps */
import { useGetStore } from '@/store/StoreProvider';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function useRedirectWithourEmail(location = './verifyEmail') {
  const { authStore } = useGetStore();
  const email = authStore.verifyingEmail;
  const router = useRouter();

  useEffect(() => {
    if (!email) {
      router.push(location);
    }
  }, [email]);

  return { email };
}

export function useRedirectToApp(
  authToken: string,
  remainingExpTime: number
) {
  const appLink = process.env.NEXT_PUBLIC_APP_URL || '#';
  if (!appLink) {
    throw new Error('App url is invalid');
  }

  const router = useRouter();
  let uri = `http://${appLink}`;

  if (authToken && remainingExpTime) {
    uri = `http://${appLink}/?token=${authToken}&remainExpTime=${remainingExpTime}`;
  }
  function _navigate() {
    router.push(uri);
  }

  return {
    navigate: _navigate,
    uri
  };
}
