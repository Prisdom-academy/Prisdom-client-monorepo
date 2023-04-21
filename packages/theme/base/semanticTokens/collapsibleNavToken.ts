import { ExtendedColor } from '../../colors/interfaces';
import { ColorToken } from '../interfaces';

export const collapsibleNavTokenDef = {
  cpn_nav_ver_content_inactive: {
    default: ExtendedColor['darkLevel.200']
  },
  cpn_nav_ver_arrow_inactive: {
    default: ExtendedColor['darkLevel.300']
  },
  cpn_nav_ver_bg_inactive: {
    default: 'rgba(255,255,255,.16)'
  },
  cpn_nav_ver_content_active: {
    default: ColorToken.primary_light
  },
  cpn_nav_ver_arrow_active: {
    default: ColorToken.primary_base
  },
  cpn_nav_ver_bg_active: {
    default: 'rgba(7, 132, 242, 0.16)'
  }
};
