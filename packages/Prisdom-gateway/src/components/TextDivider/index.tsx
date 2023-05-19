import { Flex, Divider, Text, FlexProps } from '@chakra-ui/react';
import { TypoToken } from '@prisdom/theme/base/interfaces';
import { TextLayer } from '@prisdom/theme/typography/interfaces';

interface DividerProps extends FlexProps {
  title: string;
}

const TextDivider = (props: DividerProps) => {
  const { title, ...rest } = props;
  return (
    <Flex w="100%" alignItems={'center'} my="4 !important" {...rest}>
      <Divider />
      <Text
        mx="3"
        layerStyle={TextLayer.smallRegularNormal}
        color={TypoToken.type_neutral_light}
      >
        {title}
      </Text>
      <Divider />
    </Flex>
  );
};

export default TextDivider;
