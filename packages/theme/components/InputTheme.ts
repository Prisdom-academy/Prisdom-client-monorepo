import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { ColorToken, TypoToken } from '../base/interfaces';
import { NavTokenColor } from '../base/aliasTokens/interfaces';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

export const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    color: TypoToken.type_neutral_default,

    _dark: {
      '&[aria-invalid="true"]': {
        borderColor: ColorToken.error_base,
        shadow: 'none'
      },
      '&[data-success="true"]': {
        borderColor: ColorToken.success_base,
        shadow: 'none'
      }
    },

    _focusVisible: {
      _dark: {
        borderColor: NavTokenColor.alias_divider_decor,
        shadow: 'none',
        '&[aria-invalid="true"]': {
          borderColor: ColorToken.error_base,
          shadow: 'none'
        },
        '&[data-success="true"]': {
          borderColor: ColorToken.success_base,
          shadow: 'none'
        }
      },
      _hover: {
        _dark: {
          borderColor: NavTokenColor.alias_divider_decor
        }
      }
    },

    _hover: {
      _dark: {
        borderColor: 'rgba(255,255,255,.56)',

        '&[aria-invalid="true"]': {
          borderColor: ColorToken.error_base,
          shadow: 'none'
        },
        '&[data-success="true"]': {
          borderColor: ColorToken.success_base,
          shadow: 'none'
        }
      }
    }
  }
});

export const inputTheme = defineMultiStyleConfig({
  baseStyle
});
