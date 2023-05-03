import PrisdomHead from '@/components/PrisdomHead';
import { NextSafeContainer } from '@/components/layout/SafeContainer';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { commonAuthStyles } from '../styles/auth';
import TurnbackButton from '@/components/TurnbackButton';
import Footer from '@/components/layout/Footer';
import { useGetStore } from '@/store/StoreProvider';

// interface IFormInput {
//   email: string;
// }

const VerifyPin = () => {
  const store = useGetStore();

  const email = store.authStore.verifyingEmail;
  return (
    <>
      <PrisdomHead title="Verify pin" />
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
                Verify your email
              </Text>
              <Text sx={commonAuthStyles.subTitle}>
                Please check your inbox for verification code sent to{' '}
                {email}
              </Text>
            </Flex>
            <Footer mt="auto" />
          </Center>
        </NextSafeContainer>
      </Box>
    </>
  );
};

export default VerifyPin;
