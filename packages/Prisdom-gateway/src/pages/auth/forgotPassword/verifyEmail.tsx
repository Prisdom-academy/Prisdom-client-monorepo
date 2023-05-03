import PrisdomHead from '@/components/PrisdomHead';
import { NextSafeContainer } from '@/components/layout/SafeContainer';
import { Box, Center, Flex, Text, chakra } from '@chakra-ui/react';
import { commonAuthStyles } from '../styles/auth';
import { TextInputController } from '@prisdom/component-ui/form/FormControllers/TextInputController';
import { EmailIconFilled } from '@prisdom/theme/icons/SVGs/email';
import { useForm } from 'react-hook-form';
import PrisButton from '@prisdom/component-ui/buttons/PrisButton';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import TurnbackButton from '@/components/TurnbackButton';
import Footer from '@/components/layout/Footer';
import { useGetStore } from '@/store/StoreProvider';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendEmailSchema } from '../_validationSchema';

interface IFormInput {
  email: string;
}

const VerifyEmail = () => {
  const { control, handleSubmit, resetField } = useForm<IFormInput>({
    defaultValues: { email: '' },
    resolver: yupResolver(sendEmailSchema)
  });
  const router = useRouter();
  const store = useGetStore();

  function _onSubmit(data: IFormInput) {
    store.authStore.setVerifyingEmail(data.email);
    router.push('/auth/forgotPassword/verifyPin');
  }

  return (
    <>
      <PrisdomHead title="Reset password" />
      <Box pt="4">
        <NextSafeContainer>
          <TurnbackButton />
          <Center
            flexDir={'column'}
            id="form-wrapper"
            minH="calc(100vh - 9.6rem)"
          >
            <Flex sx={commonAuthStyles.commonBox} id="Auth-box">
              <Text sx={commonAuthStyles.title}>
                Verify it&apos;s you
              </Text>
              <Text sx={commonAuthStyles.subTitle}>
                Enter your email to get a text message with a
                verification code
              </Text>
              <chakra.form onSubmit={handleSubmit(_onSubmit)} mt="12">
                <TextInputController
                  control={control}
                  onCustomIconClick={() => resetField('email')}
                  name={'email'}
                  label={'Email'}
                  placeholder="abc@example.com"
                />

                <PrisButton type="submit" w="100%" mt="4.2rem">
                  <EmailIconFilled
                    boxSize="6"
                    fill="inherit"
                    mr="2"
                  />
                  <Text
                    layerStyle={TextLayer.baseBoldNormal}
                    color={'inherit'}
                  >
                    Get a verification code
                  </Text>
                </PrisButton>
                <Link href="/auth/forgotPassword/verifyPin">
                  TEST
                </Link>
              </chakra.form>
            </Flex>
            <Footer mt="auto" />
          </Center>
        </NextSafeContainer>
      </Box>
    </>
  );
};

export default VerifyEmail;
