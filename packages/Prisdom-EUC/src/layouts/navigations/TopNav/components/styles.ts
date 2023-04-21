import { NavTokenColor } from '@prisdom/theme/base/aliasTokens/interfaces';
import { ExtendedColor } from '@prisdom/theme/colors/interfaces';
import { defineStyle } from '@chakra-ui/react';
import { ColorToken } from '@prisdom/theme/base/interfaces';

const commonBtnStyle = {
  transition: 'all .2s',
  boxSize: '2.75rem',
  minW: 0,
  borderRadius: '50%',
  position: 'absolute',
  bottom: '-1px'
};
export const styles = defineStyle({
  noticCount: {
    alignItems: 'center',
    justifyContent: 'center',
    w: '1.25rem',
    h: '1.25rem',
    bg: ExtendedColor['error_dark.500'],
    borderRadius: '5rem',
    position: 'absolute',
    top: '-3px',
    right: '-5px'
  },

  linkBox: {
    w: '100%',

    _hover: {
      '.avatarInfoContainer': {
        bg: NavTokenColor.alias_neutral_bg_3
      }
    }
  },

  avatarInfoContainer: {
    justify: 'flex-start',
    w: '100%',
    py: '1.5rem',
    px: '1rem',
    borderTopRadius: '.75rem',
    display: 'flex'
  },

  avatarBadge: {
    bgColor: ColorToken.warning_light,
    color: ColorToken.warning_darker,
    justifySelf: 'flex-end',
    ml: 'auto !important',
    position: 'absolute',
    top: '1px',
    right: '10px',

    boxSize: '1.5rem',
    zIndex: 300
  },

  profilePanel: {
    w: '25rem',
    mr: '1rem',
    my: '.5rem',
    alignItems: 'center',
    borderRadius: '.75rem',
    transition: 'all .3s',
    overflow: 'hidden',
    maxH: 'calc(100vh - 5rem)',
    zIndex: 1000,

    '.avatarBadge': {
      transform: 'translateY(-1.25rem)'
    },
    '.settingNav': {
      mt: '1rem'
    },
    '.switchButton': {
      mb: '1rem',
      animation: 'slideIn .4s ease-in'
    }
  },

  bigProfileImg: {
    boxSize: '3rem',
    borderRadius: '10.5rem',
    objectFit: 'cover',
    mr: '.5rem'
  },

  settingNav: {
    alignItems: 'center',
    minW: '23rem',
    minH: '3rem',
    px: '.75rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all .2s',

    _hover: {
      bgColor: 'rgba(255, 255, 255, 0.16)'
    }
  },
  settingNavDisabled: {
    opacity: 0.25,
    cursor: 'not-allowed',
    pointerEvents: 'none'
  },

  switchButtonWrapper: {
    w: '100%',
    h: '3rem',
    px: '1rem',
    borderRadius: '.5rem',
    cursor: 'pointer',
    _hover: {
      bgColor: 'rgba(255,255,255, .16)'
    },
    transition: 'all .3s'
  },

  switchButtonBgActive: {
    bgColor: NavTokenColor.cpn_nav_ver_bg_active,
    _hover: {
      opacity: 0.64
    }
  },
  switchButtonContentActive: {
    fill: NavTokenColor.cpn_nav_ver_content_active,
    color: NavTokenColor.cpn_nav_ver_content_active
  },

  notificationBellBox: {
    ml: '1.25rem',
    boxSize: '2.25rem !important',
    borderRadius: '50%',
    minW: 0
  },
  notificationPanel: {
    w: '25rem',
    mt: '.5rem',
    mr: '1rem'
  },

  notificationList: {
    pb: '1rem',
    maxH: 'calc(100vh - 15.3rem)',
    overflowY: 'auto'
  },

  slideRightBtn: {
    ...commonBtnStyle,
    right: '7px'
  },

  slideLeftBtn: {
    ...commonBtnStyle,
    left: '7px'
  }
});
