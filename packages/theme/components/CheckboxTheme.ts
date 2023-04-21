/* eslint-disable quote-props */
import { checkboxAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import {
  BorderToken,
  CheckBoxTokenColor,
  ColorToken,
} from "@prisdom/theme/base/interfaces";
import { shadowsTokenDefinition } from "@prisdom/theme/base/semanticTokens/shadowsToken";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    bgColor: "transparent",

    _disabled: {
      bgColor: CheckBoxTokenColor.cpn_check_box_bg_disable + " !important",
      border: BorderToken.cpn_check_box_stroke_disable + "!important",

      "& svg": {
        color: CheckBoxTokenColor.cpn_check_box_content_disable,
      },
    },

    _hover: {
      border: "1px solid",
      borderColor: CheckBoxTokenColor.cpn_check_box_stroke_defaultHover,
      shadow: shadowsTokenDefinition.checkbox_default_hover,

      _checked: {
        bgColor: CheckBoxTokenColor.cpn_check_box_bg_checkmark,
      },
    },

    _checked: {
      bgColor: CheckBoxTokenColor.cpn_check_box_bg_checkmark,
      border: "none",
    },
  },

  icon: {
    color: "white",
  },

  label: {
    color: ColorToken.text_normal,
  },
});

export const CheckboxStyles = defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    size: "lg",
  },
});
