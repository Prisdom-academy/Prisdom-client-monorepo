import { Box, Text } from '@chakra-ui/react';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import PrisButton from '@prisdom/component-ui/buttons/PrisButton';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Box>
        <Text color={'blue.400'} layerStyle={TextLayer.largeBold2X}>
          Hello world
        </Text>
        <PrisButton>Hello</PrisButton>
        <Link href={'/articles'}>articles</Link>
      </Box>
    </>
  );
}
