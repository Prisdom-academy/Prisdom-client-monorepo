import PrisdomHead from '@/components/PrisdomHead';
import TurnbackButton from '@/components/TurnbackButton';
import { NextSafeContainer } from '@/components/layout/SafeContainer';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { commonAuthStyles } from '../../../styles/auth/auth';
import Footer from '@/components/layout/Footer';
import { PasswordInputController } from '@prisdom/component-ui/form/FormControllers/PasswordInputController';
import { useForm } from 'react-hook-form';
import PasswordEvaluator from '@prisdom/component-ui/form/PasswordEvaluator';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordSchema } from '../../../validations/_validationSchema';
import PrisButton from '@prisdom/component-ui/buttons/PrisButton';
import { useRouter } from 'next/router';
import { useRedirectWithourEmail } from '../../../hooks/useRedirectWithoutEmail';

interface IFormInput {
  password: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const { control, handleSubmit, watch } = useForm<IFormInput>({
    defaultValues: {
      password: '',
      confirmPassword: ''
    },
    resolver: yupResolver(resetPasswordSchema)
  });
  useRedirectWithourEmail();

  const router = useRouter();
  const watchPassword = watch('password', '');

  function _submit(data: IFormInput) {
    console.log('DATA', data);
    router.push('./success');
  }

  return (
    <>
      <PrisdomHead title="Reset password" />
      <Box>
        <NextSafeContainer>
          <TurnbackButton />
          <Center
            flexDir={'column'}
            id="form-wrapper"
            minH="calc(100vh - 13.6rem)"
          >
            <Flex
              sx={commonAuthStyles.commonBox}
              id="Auth-box"
              className="passwordBox"
            >
              <Text sx={commonAuthStyles.title}>
                Reset your password.
              </Text>
              <Text sx={commonAuthStyles.subTitle}>
                Strong passwords include numbers, letters, and
                punctuation marks.
              </Text>
              <Box mt="9">
                <form onSubmit={handleSubmit(_submit)}>
                  <PasswordInputController
                    control={control}
                    name={'password'}
                    label={'New password'}
                    placeholder="**********"
                  />
                  <PasswordInputController
                    control={control}
                    name={'confirmPassword'}
                    label={'Confirm password'}
                    placeholder="**********"
                    successMsg="Your password is matched"
                    originalPassword={watchPassword}
                  />
                  <PasswordEvaluator password={watchPassword} />

                  <PrisButton type="submit" w="100%" mt="4.2rem">
                    Reset password
                  </PrisButton>
                </form>
              </Box>
            </Flex>
          </Center>
        </NextSafeContainer>
        <Footer mt="auto" />
      </Box>
    </>
  );
};

export default ResetPassword;
