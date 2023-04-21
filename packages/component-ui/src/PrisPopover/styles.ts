import { defineStyle } from '@chakra-ui/react';
import { NavTokenColor } from '@prisdom/theme/base/aliasTokens/interfaces';

export const styles = defineStyle({
  root: {
    bg: NavTokenColor.alias_neutral_bg_2,
    minH: '10rem',
    position: 'absolute',
    top: '3.6rem',
    right: '0px',
    border: '1px solid',
    borderColor: NavTokenColor.alias_divider_1,
    borderRadius: '.5rem',
    flexDir: 'column',
    boxShadow: '-40px 40px 80px -8px rgba(0, 0, 0, 0.24)',
    transition: 'all .4s'
  }
});
