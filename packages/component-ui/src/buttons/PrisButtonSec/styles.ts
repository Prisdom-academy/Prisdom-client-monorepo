import { defineStyleConfig } from '@chakra-ui/react';
import { ButtonTokenColor } from '@prisdom/theme/base/interfaces';
import { ExtendedColor } from '@prisdom/theme/colors/interfaces';
import { fitButtonReusableStyle } from '../PrisButton/styles';

export const PrisButtonSecStyle = defineStyleConfig({
  baseStyle: {
    ...fitButtonReusableStyle
  },

  variants: {
    primary: {
      color: ButtonTokenColor.cpn_btn_secondary_content_default,
      bgColor: ButtonTokenColor.cpn_btn_secondary_background_default,

      _hover: {
        color: ButtonTokenColor.cpn_btn_secondary_content_hover
      },
      _loading: {
        color:
          ButtonTokenColor.cpn_btn_secondary_content_loading +
          ' !important',
        bgColor: 'white !important'
      },
      _focus: {
        color: ButtonTokenColor.cpn_btn_secondary_content_focus,
        outline: `3px solid`,
        outlineColor: ExtendedColor['darkLevel.500']
      },
      _disabled: {
        color: ButtonTokenColor.cpn_btn_secondary_content_disabled,
        cursor: 'not-allowed'
      }
    }
  },

  sizes: {
    sm: {
      fontSize: '14px',
      padding: '8px 12px'
    },
    md: {
      fontSize: '16px',
      padding: '10px 16px'
    },
    lg: {
      fontSize: '18px',
      padding: '14px 20px'
    }
  },

  defaultProps: {
    size: 'sm',
    variant: 'primary'
  }
});
