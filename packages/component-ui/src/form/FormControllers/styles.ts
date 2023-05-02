import { defineStyle } from '@chakra-ui/react';
import { TypoToken } from '@prisdom/theme/base/interfaces';

export const styles = defineStyle({
  customIcon: {
    boxSize: 5,
    cursor: 'pointer',
    mt: '4px',
    fill: TypoToken.type_neutral_default
  }
});
