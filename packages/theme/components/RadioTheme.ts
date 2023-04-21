import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { radioAnatomy } from "@chakra-ui/anatomy";
import { ColorToken } from "../base/interfaces";
import { ExtendedColor } from "../colors/interfaces";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderColor: ExtendedColor["darkLevel.500"],

    _before: {
      boxSize: "60% !important",
      color: ExtendedColor["darkLevel.100"],
    },
    _checked: {
      bgColor: ColorToken.primary_base,
      border: "none",
    },
  },
});

export const radioTheme = defineMultiStyleConfig({ baseStyle });
