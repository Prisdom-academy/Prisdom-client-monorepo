import { defineStyleConfig } from '@chakra-ui/react';
import {
  ButtonTokenColor,
  ColorToken
} from '@prisdom/theme/base/interfaces';
import { TextLayer } from '@prisdom/theme/typography/interfaces';

export const fitButtonReusableStyle = {
  color: 'white',
  borderRadius: '.4rem',
  fontFamily: 'content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all .3s',
  minW: '100px'
};

export const PrisButtonStyle = defineStyleConfig({
  baseStyle: {
    ...fitButtonReusableStyle
  },

  variants: {
    primary: {
      backgroundColor:
        ButtonTokenColor.cpn_btn_primary_background_default,
      color: 'white',

      _hover: {
        bg: ButtonTokenColor.cpn_btn_primary_background_hover
      },
      _loading: {
        bg:
          ButtonTokenColor.cpn_btn_primary_background_loading +
          ' !important',
        color: 'white !important'
      },
      _focus: {
        bg: ButtonTokenColor.cpn_btn_primary_background_focus,
        outline: `3px solid`,
        outlineColor: ColorToken.primary_light
      },
      _disabled: {
        bg: 'white',
        color: ButtonTokenColor.cpn_btn_primary_content_disable,
        cursor: 'not-allowed'
      }
    },
    tertiary: {
      backgroundColor:
        ButtonTokenColor.cpn_btn_neutral_background_default,
      color: ButtonTokenColor.cpn_btn_neutral_content_default,
      fill: ButtonTokenColor.cpn_btn_neutral_content_default,

      _hover: {
        bg: ButtonTokenColor.cpn_btn_neutral_background_hover
      },
      _loading: {
        bg:
          ButtonTokenColor.cpn_btn_neutral_background_loading +
          ' !important',
        fill:
          ButtonTokenColor.cpn_btn_neutral_background_loading +
          ' !important'
      },
      _focus: {
        bg: ButtonTokenColor.cpn_btn_neutral_background_hover,
        outline: `3px solid`,
        outlineColor:
          ButtonTokenColor.cpn_btn_neutral_background_hover,
        border: '1px solid',
        borderColor: ButtonTokenColor.cpn_btn_neutral_stroke_disable
      },
      _disabled: {
        bg: 'none',
        border: '1px solid',
        borderColor: ButtonTokenColor.cpn_btn_neutral_stroke_disable,
        cursor: 'not-allowed',
        color: ButtonTokenColor.cpn_btn_neutral_content_disabled,
        fill: ButtonTokenColor.cpn_btn_neutral_content_disabled
      }
    }
  },

  sizes: {
    sm: {
      fontSize: '14px',
      padding: '8px 12px',
      layerStyle: TextLayer.smallBoldNormal
    },
    md: {
      fontSize: '16px',
      padding: '10px 16px',
      layerStyle: TextLayer.baseBoldNormal
    },
    lg: {
      fontSize: '18px',
      padding: '14px 20px',
      layerStyle: TextLayer.mediumBold
    }
  },

  defaultProps: {
    size: 'sm',
    variant: 'primary'
  }
});
