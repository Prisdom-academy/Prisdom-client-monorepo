import { defineStyle } from '@chakra-ui/react';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';

export const style = (leftNavExpanded: boolean, isFixed: boolean) =>
  defineStyle({
    root: {
      h: 'calc(100vh - 3.5rem)',
      w: leftNavExpanded || isFixed ? '17.5rem' : '5rem',
      bgColor: NavTokenColor.alias_neutral_bg_2,
      alignItems: 'flex-start',
      transition: 'all .3s',
      pos: 'fixed',
      top: '3.5rem',
      left: '0',
      zIndex: '-1'
    },

    menuTitle: {
      m: `1.6rem 0 .5rem ${
        leftNavExpanded || isFixed ? '.9rem' : '0'
      }`,
      textTransform: 'uppercase',
      transition: 'all .3s'
    }
  });
