'use client';
import { Box, Text } from '@chakra-ui/react';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import PrisButton from '@prisdom/component-ui/buttons/PrisButton';
import { NextPage } from 'next';
import PrisdomHead from '@/components/PrisdomHead';
import Link from 'next/link';

interface Props {
  name: string;
}

const Home: NextPage<Props> = ({ name }) => {
  return (
    <>
      <PrisdomHead />
      <Box>
        <Text color={'blue.400'} layerStyle={TextLayer.largeBold2X}>
          Hello world
        </Text>
        <Text layerStyle={TextLayer.baseRegularNormal}>
          Base normal
        </Text>
        <PrisButton>Hello</PrisButton>
        <Link href={'/articles'}>articles {name}</Link>
      </Box>
    </>
  );
};

Home.getInitialProps = () => {
  return {
    name: 'yasuo'
  };
};

export default Home;
