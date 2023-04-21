import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { ExtendedColor } from "@prisdom/theme/colors/interfaces";
import { TextLayer } from "@prisdom/theme/typography/interfaces";

interface BadgeInfoProps extends FlexProps {
  bgColor?: string;
  color?: string;
  badgeType?: "round" | "no-round";
  className?: string;
}

const BadgeInfo = (props: BadgeInfoProps) => {
  const {
    children,
    bgColor = ExtendedColor["darkLevel.300"],
    color = ExtendedColor["darkLevel.900"],
    badgeType = "no-round",
    ...rest
  } = props;

  const borderRadius = badgeType === "no-round" ? ".3rem" : "10rem";

  return (
    <Flex
      p="3px 9px"
      bgColor={bgColor}
      borderRadius={borderRadius}
      display="inline"
      {...rest}
    >
      <Text color={color} layerStyle={TextLayer.smallBoldNormalX}>
        {children}
      </Text>
    </Flex>
  );
};

export default BadgeInfo;
