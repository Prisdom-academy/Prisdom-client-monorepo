import { Center, Text } from '@chakra-ui/react';
import PrisButton from '@prisdom/component-ui/src/buttons/PrisButton';
import { ColorToken } from 'theme/base/interfaces';
import { TextLayer } from 'theme/typography/interfaces';

const Courses = () => {
  return (
    <Center>
      <Text
        layerStyle={TextLayer.largeMedium4X}
        color={ColorToken.primary_base}
      >
        Courses
      </Text>
      <PrisButton>Hello there</PrisButton>
    </Center>
  );
};

export default Courses;
