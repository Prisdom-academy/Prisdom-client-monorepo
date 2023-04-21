import { defineStyle } from '@chakra-ui/react';
import { NavTokenColor } from '@prisdom/theme/base/aliasTokens/interfaces';
import {
  TypoToken
} from '@prisdom/theme/base/interfaces';

export const styles = defineStyle({
  root: {
    overflow: 'hidden',
    cursor: 'grab',

    '.recentCourseItem': {
      ml: '.85rem',
      flex: '0 0 15rem',
      borderRadius: '.7rem',
      cursor: 'pointer',
      borderColor: NavTokenColor.alias_divider_1,
      overflow: 'visible',
      position: 'relative',
      height: '5.45rem',

      _hover: {
        h2: {
          color: TypoToken.type_link_focus
        }
      }
    }
  }
});
