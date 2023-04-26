import PrisdomHead from '@/components/PrisdomHead';
import { Box, Text } from '@chakra-ui/react';
import background from '@/images/hero-bg.jpg';

const Signin = () => {
  return (
    <>
      <Box
        bgImage={background.src}
        objectFit={'cover'}
        h="100vh"
        id="SigninPage"
      >
        <Box p="5rem">
          {/* <NextSafeContainer> */}
          <PrisdomHead title="Prisdom - Signin" />
          <Text>Signin page</Text>
          {/* </NextSafeContainer> */}
        </Box>
      </Box>
    </>
  );
};

export default Signin;
