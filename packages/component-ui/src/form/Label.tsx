import { TextProps, Text } from '@chakra-ui/react';
import { TypoToken } from '@prisdom/theme/base/interfaces';
import { TextLayer } from '@prisdom/theme/typography/interfaces';

interface ILabelProps extends TextProps {}

export const Label = (props: ILabelProps) => {
  const { children, ...rest } = props;

  return (
    <Text
      layerStyle={TextLayer.smallBoldNormal}
      color={TypoToken.type_neutral_default}
      mb="2"
      {...rest}
    >
      {children}
    </Text>
  );
};
