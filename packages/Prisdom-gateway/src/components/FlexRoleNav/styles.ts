import { defineStyle } from '@chakra-ui/react';
import { NavTokenColor } from '@prisdom/theme/base/aliasTokens/interfaces';
import { ColorToken } from '@prisdom/theme/base/interfaces';
import { SignUpRole } from '.';

export const stylesGenerator = (role: SignUpRole) =>
  defineStyle({
    root: {
      backgroundColor: ColorToken.global_dark_level_transparent_48,
      p: 2,
      borderRadius: '.5rem',
      pos: 'relative',

      _after: {
        content: '""',
        h: '9',
        w: '16.625rem',
        bgColor: NavTokenColor.alias_neutral_bg_2,
        pos: 'absolute',
        top: 2,
        left: 2,
        borderRadius: '.3rem',
        transition: 'all .3s',
        transform:
          role === 'learner' ? 'translateX(0)' : 'translateX(97%)'
      }
    },

    itemBox: {
      h: '9',
      w: '16.625rem',
      zIndex: '100',
      cursor: 'pointer'
    }
  });
