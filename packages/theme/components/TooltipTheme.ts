import { ComponentStyleConfig } from "@chakra-ui/react";
import { ExtendedColor } from "../colors/interfaces";
import { TextLayer } from "../typography/interfaces";

export const TooltipTheme: ComponentStyleConfig = {
  baseStyle: (props) => ({
    borderRadius: "10rem",
    // color: ExtendsColorEnum["success.500"],
    bgColor: ExtendedColor["darkLevel.900"],
    layerStyle: TextLayer.largeBold3X,
    px: 3,
    py: 2,
    fontSize: "1rem",
  }),
};
