import { defineStyle } from '@chakra-ui/react';
import { NavTokenColor } from '@prisdom/theme/base/aliasTokens/interfaces';
import { TypoToken } from '@prisdom/theme/base/interfaces';
import { TextLayer } from '@prisdom/theme/typography/interfaces';

export const commonAuthStyles = defineStyle({
  commonBox: {
    w: '24.75rem',
    bgColor: NavTokenColor.alias_neutral_bg_2,
    p: '8',
    borderRadius: '12',
    align: 'center',
    flexDir: 'column',
    mt: { base: '4rem', xl: '6rem' },

    '&.passwordBox': {
      mt: { base: '1rem', xl: '.5rem' }
    }
  },

  signupBox: {
    w: '37.75rem',
    bgColor: NavTokenColor.alias_neutral_bg_2,
    p: '8',
    borderRadius: '12',
    align: 'center',
    flexDir: 'column',
    mt: { base: '1rem', xl: '.5rem' },

    '.passwordField': {
      width: '48%'
    }
  },

  title: {
    layerStyle: TextLayer.largeBold3X,
    color: TypoToken.type_neutral_medium,
    textAlign: 'center',
    w: '100%'
  },

  subTitle: {
    layerStyle: TextLayer.baseRegularNormal,
    color: TypoToken.type_neutral_light,
    textAlign: 'center'
  }
});
