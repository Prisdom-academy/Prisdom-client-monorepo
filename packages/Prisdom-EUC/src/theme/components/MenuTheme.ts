import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { ColorToken } from 'theme/base/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';

export const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    background: 'rgba(22, 28, 36, 0.56)', // darkLevel.900
    border: 'none',
    backdropFilter: 'blur(4.5rem)',
    borderColor: ExtendedColor['darkLevel.600']
  },
  item: {
    bgColor: 'transparent',
    color: ExtendedColor['darkLevel.200'],
    fill: ExtendedColor['darkLevel.200'],
    '& span': {
      color: 'inherit'
    },

    _hover: {
      bgColor: ExtendedColor['darkLevel.600']
    }
  },
  divider: {
    mx: '.5rem'
  }
});

const dangerStyle = definePartsStyle({
  item: {
    color: ColorToken.error_base,
    fill: ColorToken.error_base,

    _hover: {
      bgColor: ColorToken.error_lighter
    }
  }
});

export const MenuTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    danger: dangerStyle
  }
});
