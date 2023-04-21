import { defineStyle } from '@chakra-ui/react';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { CollapsibleNavToken } from 'theme/base/interfaces';

const _activeStyle = defineStyle({
  _active: {
    bgColor: CollapsibleNavToken.cpn_nav_ver_bg_active,
    color: CollapsibleNavToken.cpn_nav_ver_content_active,
    fill: CollapsibleNavToken.cpn_nav_ver_content_active,

    _hover: {
      opacity: 0.64
    }
  }
});

export const styleGen = (
  isActive: boolean,
  isCollapse?: boolean,
  isMinimize?: boolean
) =>
  defineStyle({
    root: {
      w: '100%',
      color: CollapsibleNavToken.cpn_nav_ver_content_inactive,
      fill: CollapsibleNavToken.cpn_nav_ver_content_inactive,
      p: '.75rem',
      h: '3rem',

      ...(isActive ? _activeStyle : {}),

      _hover: {
        bgColor: CollapsibleNavToken.cpn_nav_ver_bg_inactive
      }
    },

    icon: {
      boxSize: '1.5rem',
      mr: isMinimize ? 0 : '.7rem',
      fill: 'inherit'
    },

    arrow: {
      boxSize: '1rem',
      fill: 'inherit',
      transform: !isCollapse ? 'rotate(90deg)' : '0deg',
      transition: 'all .3s'
    },

    item: {
      alignItems: 'center',
      w: '100%',
      h: '2.6rem',
      justifyContent: 'flex-start',
      pl: isActive ? '.85rem' : '',

      _hover: {
        border: '1px solid',
        borderColor: NavTokenColor.alias_divider_1
      }
    }
  });
