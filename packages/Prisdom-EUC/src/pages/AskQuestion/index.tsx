import { Center, Text } from '@chakra-ui/react';
import { ColorToken } from '@prisdom/theme/base/interfaces';
import { TextLayer } from '@prisdom/theme/typography/interfaces';

const AskQuestion = () => {
  return (
    <Center>
      <Text
        layerStyle={TextLayer.largeMedium4X}
        color={ColorToken.error_darker}
      >
        Q & A
      </Text>
    </Center>
  );
};

export default AskQuestion;
