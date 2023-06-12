import { SignUpRole } from '@/components/FlexRoleNav';
import { SignupFormInput } from '@/pages/auth/signup';
import { useGetStore } from '@/store/StoreProvider';
import { ClientUserType } from '@prisdom/services/ClientAuthService/interfaces';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { useState } from 'react';

export function useSignupPageTransport(assignedRole: SignUpRole) {
  const { authStore } = useGetStore();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function onSubmit(data: SignupFormInput) {
    setIsLoading(true);
    authStore
      .signup({
        ..._.omit(data, 'confirmPassword'),
        type: assignedRole as ClientUserType
      })
      .then((val) => {
        if (val) {
          router.push('/auth/signup/success');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return {
    onSubmit,
    isLoading
  };
}
