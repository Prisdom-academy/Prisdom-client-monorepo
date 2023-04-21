import { Box, BoxProps } from '@chakra-ui/react';

interface ISafeContainer extends BoxProps {}

const SafeContainer = (props: ISafeContainer) => {
  const { children } = props;

  return (
    <Box maxW={'1200px'} m={'.75rem auto'} id="SafeContainer" p="3">
      {children}
    </Box>
  );
};

export default SafeContainer;
