import { defineStyle } from '@chakra-ui/react';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { ButtonTokenColor } from 'theme/base/interfaces';

export const styles = defineStyle({
  root: {
    boxSizing: 'none',
    p: '1rem',
    borderRadius: '.5rem',

    _hover: {
      outline: '1px solid',
      outlineColor: NavTokenColor.alias_divider_1
    }
  },
  moreActionButton: {
    position: 'absolute',
    top: '50%',
    right: '-2px',
    minW: 0,
    boxSize: '2.25rem',
    borderRadius: '50%',
    transform: 'translateY(-55%)'
  },

  trashMenuItem: {
    color: ButtonTokenColor.cpn_txt_btn_danger_content_default,
    fill: ButtonTokenColor.cpn_txt_btn_danger_content_default,

    _hover: {
      bgColor: ButtonTokenColor.cpn_txt_btn_danger_background_hover,
      fill: ButtonTokenColor.cpn_txt_btn_danger_content_hover,
      color: ButtonTokenColor.cpn_txt_btn_danger_content_hover
    }
  }
});
