import { Center, Text } from '@chakra-ui/react';
import { ColorToken } from 'theme/base/interfaces';
import { TextLayer } from 'theme/typography/interfaces';

const ExploreMore = () => {
  return (
    <Center>
      <Text
        layerStyle={TextLayer.largeMedium4X}
        color={ColorToken.warning_base}
      >
        ExploreMore
      </Text>
    </Center>
  );
};

export default ExploreMore;
