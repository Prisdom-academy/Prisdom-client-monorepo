import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <>
      <Box>
        <Text color={'blue.400'} fontSize={'30px'}>
          Hello world pricing
        </Text>
        <Link href={'/'}>Home</Link>
      </Box>
    </>
  );
}
