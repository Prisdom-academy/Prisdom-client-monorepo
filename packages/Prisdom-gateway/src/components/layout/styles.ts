import { defineStyle } from '@chakra-ui/react';
import { NavTokenColor } from '@prisdom/theme/base/aliasTokens/interfaces';
import {
  ColorToken,
  TypoToken
} from '@prisdom/theme/base/interfaces';

export const styles = defineStyle({
  root: {
    h: '4.5rem',
    w: '100%',
    alignItems: 'center',
    px: '1.8rem',
    justifyContent: 'space-between',
    pos: 'fixed',
    top: 0,
    left: 0,
    backdropFilter: 'blur(5px)',
    zIndex: 100,

    _after: {
      content: "''",
      width: '100%',
      height: '1px',
      backgroundColor: NavTokenColor.alias_divider_1,
      pos: 'absolute',
      bottom: 0,
      left: 0
    },

    '.logoImage': {
      height: '3rem',
      width: 'auto'
    },

    '.navItem': {
      _hover: {
        h5: {
          color: TypoToken.type_link_hover
        }
      },
      'h5[data-active="true"]': {
        color: ColorToken.primary_base,
        pos: 'relative',

        _before: {
          content: "''",
          w: 4,
          h: 1,
          borderRadius: 10,
          bgColor: ColorToken.primary_base,
          pos: 'absolute',
          bottom: -2,
          left: '50%',
          transform: 'translateX(-50%)'
        }
      }
    }
  }
});
