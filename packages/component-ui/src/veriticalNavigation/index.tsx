import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ExtendedColor } from "@prisdom/theme/colors/interfaces";
import { ArrowRightIconOutlined } from "@prisdom/theme/icons/SVGs/arrow";
import { CourseIconOutlined } from "@prisdom/theme/icons/SVGs/course";
import { TextLayer } from "@prisdom/theme/typography/interfaces";
import { styles } from "./styles";

const VerticalNavigation = () => {
  const [isCollapse, setIsCollapse] = useState(true);

  return (
    <Flex sx={styles.root} onClick={() => setIsCollapse(!isCollapse)}>
      <CourseIconOutlined
        mr="1rem"
        boxSize={"1.5rem"}
        fill={ExtendedColor["darkLevel.100"]}
      />
      <Text layerStyle={TextLayer.baseRegularNormal} marginRight="auto">
        Menu here
      </Text>
      <ArrowRightIconOutlined
        boxSize={"1rem"}
        fill={ExtendedColor["darkLevel.100"]}
        transition={"all .3s"}
        transform={!isCollapse ? "rotate(90deg)" : "rotate(0)"}
      />
    </Flex>
  );
};

export default VerticalNavigation;
