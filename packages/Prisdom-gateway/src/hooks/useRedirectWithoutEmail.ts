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
