import { Center, Text } from '@chakra-ui/react';
import { ColorToken } from 'theme/base/interfaces';
import { TextLayer } from 'theme/typography/interfaces';

const DefaultExplore = () => {
  return (
    <Center>
      <Text
        layerStyle={TextLayer.largeMedium4X}
        color={ColorToken.success_base}
      >
        DefaultExplore
      </Text>
    </Center>
  );
};

export default DefaultExplore;
