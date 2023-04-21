import { defineStyle } from '@chakra-ui/react';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { ColorToken } from 'theme/base/interfaces';

export const stylesComputed = (
  isDownTrend?: boolean,
  isMe?: boolean
) =>
  defineStyle({
    root: {
      h: '100%',
      w: '21rem'
    },

    courseTracking: {
      w: '9.4rem',
      h: '7.6rem',
      flexDirection: 'column',
      borderRadius: '.9rem',
      overflow: 'hidden'
    },

    progressBar: {
      h: 2,
      w: '100%',
      pos: 'relative',
      mt: 3
    },

    progressBarAfter: {
      content: '""',
      height: '100%',
      pos: 'absolute',
      top: 0,
      left: 0,
      borderRadius: 20
    },

    secondarySection: {
      borderRadius: '.8rem',
      mt: '4',
      bgColor: NavTokenColor.alias_neutral_bg_2,
      p: 3,
      flexDir: 'column'
    },

    rankingBox: {
      ml: 'auto',
      boxSize: '1.5rem',
      bgColor: isDownTrend
        ? ColorToken.global_error_transparent_32
        : ColorToken.global_success_transparent_32,
      borderRadius: '.2rem',
      outline: '3px solid',
      outlineColor: isDownTrend
        ? ColorToken.global_error_transparent_16
        : ColorToken.global_success_transparent_16
    },

    rankGoldNumber: {
      pos: 'absolute',
      transform: 'translate(-50%, -50%)',
      top: '52%',
      left: '53%',
      color: ColorToken.warning_darker
    },

    boxStyle: {
      bgColor: ColorToken.global_dark_level_transparent_24,
      mt: '3',
      borderRadius: '.75rem'
    },

    rightBarItem: {
      h: '3.5rem',
      pos: 'relative',
      px: 4,
      bg: isMe
        ? `linear-gradient(90deg, rgba(7, 132, 242, 0.22) 0%, rgba(7, 132, 242, 0) 100%);`
        : 'none',
      _hover: {
        bgColor: ColorToken.global_primary_transparent_16
      }
    },

    arrowIcon: {
      fill: ColorToken.primary_base,
      h: '100%',
      w: '1rem',
      pos: 'absolute',
      top: 0,
      left: '-10px'
    }
  });
