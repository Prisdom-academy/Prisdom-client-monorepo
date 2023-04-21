import { defineStyle } from '@chakra-ui/react';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { ButtonTokenColor, ShadowToken } from 'theme/base/interfaces';

export const navStyle = defineStyle({
  root: {
    bgColor: NavTokenColor.alias_neutral_bg_2,
    height: '3.5rem',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    px: '1rem',
    justifyContent: 'space-between',
    boxShadow: ShadowToken.z4,
    position: 'fixed'
  },

  dragIcon: {
    fill: ButtonTokenColor.cpn_txt_btn_secondary_content_default,
    h: '1.5rem',
    w: '1.5rem',
    cursor: 'pointer'
  }
});
