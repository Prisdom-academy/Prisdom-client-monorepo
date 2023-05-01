/* eslint-disable quote-props */
import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import {
  BorderToken,
  CheckBoxTokenColor,
  ColorToken,
  TypoToken
} from '@prisdom/theme/base/interfaces';
import { shadowsTokenDefinition } from '@prisdom/theme/base/semanticTokens/shadowsToken';
import { TextLayer } from '../typography/interfaces';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    bgColor: 'transparent',
    border: '1px solid',
    borderColor: CheckBoxTokenColor.cpn_check_box_stroke_default,
    borderRadius: 4,

    _disabled: {
      bgColor:
        `${CheckBoxTokenColor.cpn_check_box_bg_disable  } !important`,
      border: `${BorderToken.cpn_check_box_stroke_disable  }!important`,

      '& svg': {
        color: CheckBoxTokenColor.cpn_check_box_content_disable
      }
    },

    _hover: {
      border: '1px solid',
      borderColor:
        CheckBoxTokenColor.cpn_check_box_stroke_defaultHover,
      shadow: shadowsTokenDefinition.checkbox_default_hover,

      _checked: {
        bgColor: CheckBoxTokenColor.cpn_check_box_bg_checkmark
      }
    },

    _checked: {
      bgColor: CheckBoxTokenColor.cpn_check_box_bg_checkmark,
      border: 'none'
    }
  },

  icon: {
    color: TypoToken.type_neutral_default
  },

  label: {
    color: ColorToken.text_normal,
    layerStyle: TextLayer.smallRegularNormal,
    ml: 3
  }
});

export const CheckboxStyles = defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    size: 'lg'
  }
});
