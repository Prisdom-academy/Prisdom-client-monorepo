import { defineStyle } from '@chakra-ui/react';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import {
  ColorToken,
  ShadowToken,
  TypoToken
} from 'theme/base/interfaces';

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
        /*
        _after: {
          content: '""',
          height: '96%',
          w: '96%',
          position: 'absolute',
          top: '.78rem',
          left: 0,
          backgroundColor: ColorToken.fake_shadow_background_info,
          zIndex: '-1',
          boxShadow: ShadowToken.shadow_color_infor,
          borderRadius: '.7rem'
        }
        */
      }
    }
  }
});
