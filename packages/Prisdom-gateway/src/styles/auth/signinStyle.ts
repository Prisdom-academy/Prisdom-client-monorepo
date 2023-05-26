import { defineStyle } from '@chakra-ui/react';
import { NavTokenColor } from '@prisdom/theme/base/aliasTokens/interfaces';
import {
  ColorToken,
  TypoToken
} from '@prisdom/theme/base/interfaces';

export const signinStyle = defineStyle({
  root: {
    w: '31.25rem',
    py: '9',
    px: '6',
    alignItems: 'center',
    bgColor: ColorToken.global_dark_level_transparent_86,
    justifySelf: 'flex-end',
    borderRadius: '.75rem',
    border: '1px solid',
    borderColor: NavTokenColor.alias_divider_1
  },

  backgroundBox: {
    backgroundSize: 'cover',
    backgroundPosition: 'middle',
    h: '100vh',
    overflowY: 'auto'
  },

  customIcon: {
    boxSize: 5,
    cursor: 'pointer',
    mt: '4px',
    fill: TypoToken.type_neutral_default
  }
});
