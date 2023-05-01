import {
  defineStyle,
  SystemStyleInterpolation
} from '@chakra-ui/react';
import { NavTokenColor } from '@prisdom/theme/base/aliasTokens/interfaces';
import {
  ButtonTokenColor,
  TypoToken
} from '@prisdom/theme/base/interfaces';
import { ExtendedColor } from '@prisdom/theme/colors/interfaces';
import { merge } from 'lodash';

export const stylesCompute = (variant: 'default' | 'outlined') => {
  let styleBaseVariant: SystemStyleInterpolation = defineStyle({
    backgroundColor:
      ButtonTokenColor.cpn_btn_secondary_background_default,
    color: ExtendedColor['darkLevel.800'],
    fill: ExtendedColor['darkLevel.800'],

    _hover: {
      backgroundColor: ExtendedColor['darkLevel.200'],
      color: ExtendedColor['darkLevel.600'],
      fill: ExtendedColor['darkLevel.600']
    },

    _disabled: {
      backgroundColor: ExtendedColor['darkLevel.200'],
      color: ButtonTokenColor.cpn_btn_secondary_content_disabled,
      fill: ButtonTokenColor.cpn_btn_secondary_content_disabled
    }
  });

  if (variant === 'outlined') {
    styleBaseVariant = defineStyle({
      backgroundColor: 'none',
      color: TypoToken.type_neutral_medium,
      fill: TypoToken.type_neutral_medium,
      border: '1px solid',
      borderColor: NavTokenColor.alias_divider_1,

      _hover: {
        borderColor: NavTokenColor.alias_divider_2
      },

      _disabled: {
        color: TypoToken.type_neutral_disable,
        fill: TypoToken.type_neutral_disable,
        borderColor: `${NavTokenColor.alias_divider_1}!important`
      }
    });
  }

  const baseStyle = defineStyle({
    maxW: '19rem',
    h: '2.75rem',

    _disabled: {
      cursor: 'not-allowed'
    }
  });

  const buttonStyle = merge(baseStyle, styleBaseVariant);

  return defineStyle({
    root: buttonStyle,
    logo: {
      mr: 3,
      fill: 'inherit',
      boxSize: 6
    }
  });
};
