import { Box } from "@chakra-ui/react";
import { ExtendedColor } from "@prisdom/theme/colors/interfaces";

interface IDotProps {
  color?: string;
}

const Dot = (props: IDotProps) => {
  const { color = ExtendedColor["primary_dark.500"] } = props;
  return <Box boxSize={"10px"} bg={color} borderRadius="50%"></Box>;
};

export default Dot;
