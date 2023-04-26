import { defineStyle } from '@chakra-ui/react';
import { NavTokenColor } from '@prisdom/theme/base/aliasTokens/interfaces';
import { TypoToken } from '@prisdom/theme/base/interfaces';

export const styles = defineStyle({
  input: {
    size: 'md',
    minW: '35rem',
    _placeholder: { color: TypoToken.type_placeholder },
    color: TypoToken.type_neutral_default
  },
  shortcut: {
    border: '1px solid',
    w: '70px',
    h: '20px',
    borderColor: NavTokenColor.cpn_shortcut_stroke,
    borderRadius: '4px',
    alignItems: 'center',
    justifyContent: 'center',
    mr: '.5rem'
  }
});
