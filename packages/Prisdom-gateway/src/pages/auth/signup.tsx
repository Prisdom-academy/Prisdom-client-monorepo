import PrisdomHead from '@/components/PrisdomHead';
import { NextSafeContainer } from '@/components/layout/SafeContainer';
import { Box, Text } from '@chakra-ui/react';

const Signup = () => {
  return (
    <>
      <Box>
        <NextSafeContainer>
          <PrisdomHead title="Prisdom - Signup" />
          <Text>Signup page</Text>
        </NextSafeContainer>
      </Box>
    </>
  );
};

export default Signup;
