import { Center, Text } from '@chakra-ui/react';
import { ColorToken } from '@prisdom/theme/base/interfaces';
import { TextLayer } from '@prisdom/theme/typography/interfaces';

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
