import { Box, BoxProps } from '@chakra-ui/react';

export interface ISafeContainer extends BoxProps {}

const SafeContainer = (props: ISafeContainer) => {
  const { children, ...rest } = props;

  return (
    <Box
      maxW={'1200px'}
      m={'.75rem auto'}
      id="SafeContainer"
      p="3"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default SafeContainer;
