/* eslint-disable quote-props */
import { defineStyleConfig } from '@chakra-ui/react';
import { ButtonTokenColor } from '@prisdom/theme/base/interfaces';

export const TextButtonStyle = defineStyleConfig({
  baseStyle: {
    transition: 'all .3s',
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  variants: {
    primary: {
      color: ButtonTokenColor.cpn_txt_btn_primary_content_default,
      fill: ButtonTokenColor.cpn_txt_btn_primary_content_default,
      _hover: {
        color: ButtonTokenColor.cpn_txt_btn_primary_content_hover,
        fill: ButtonTokenColor.cpn_txt_btn_primary_content_hover
      },
      _disabled: {
        color: ButtonTokenColor.cpn_txt_btn_primary_content_disabled,
        fill: ButtonTokenColor.cpn_txt_btn_primary_content_disabled,
        cursor: 'not-allowed'
      }
    },
    secondary: {
      color: ButtonTokenColor.cpn_txt_btn_secondary_content_default,
      fill: ButtonTokenColor.cpn_txt_btn_secondary_content_default,
      _hover: {
        color: ButtonTokenColor.cpn_txt_btn_secondary_content_hover,
        fill: ButtonTokenColor.cpn_txt_btn_secondary_content_hover
      },
      _disabled: {
        color: ButtonTokenColor.cpn_txt_btn_secondary_content_disable,
        fill: ButtonTokenColor.cpn_txt_btn_secondary_content_disable,
        cursor: 'not-allowed'
      }
    }
  },
  sizes: {
    sm: {
      minW: '4rem',
      fontSize: '14px',
      padding: '6px 8px'
    },
    md: {
      fontSize: '16px',
      padding: '6px 12px'
    },
    lg: {
      fontSize: '18px',
      padding: '6px 12px'
    }
  },

  defaultProps: {
    size: 'sm',
    variant: 'primary'
  }
});
