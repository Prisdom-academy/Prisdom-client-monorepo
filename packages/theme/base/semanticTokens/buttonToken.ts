import { ExtendedColor } from 'theme/colors/interfaces';
import { ColorToken } from '../interfaces';

const primarySet = {
  cpn_btn_primary_background_default: {
    default: ExtendedColor['primary_dark.500']
  },
  cpn_btn_primary_background_hover: {
    default: ExtendedColor['primary_dark.700']
  },
  cpn_btn_primary_background_loading: {
    default: ExtendedColor['primary_dark.300']
  },
  cpn_btn_primary_background_disabled: {
    default: ExtendedColor['darkLevel.100']
  },
  cpn_btn_primary_background_focus: {
    default: ExtendedColor['primary_dark.700']
  },

  cpn_btn_primary_content_disable: {
    default: ExtendedColor['darkLevel.500']
  }
};

const secondarySet = {
  cpn_btn_secondary_background_default: {
    default: ExtendedColor['darkLevel.100']
  },
  cpn_btn_secondary_content_default: {
    default: ExtendedColor['primary_dark.500']
  },
  cpn_btn_secondary_content_hover: {
    default: ExtendedColor['primary_dark.500']
  },
  cpn_btn_secondary_content_loading: {
    default: ExtendedColor['primary_dark.300']
  },
  cpn_btn_secondary_content_disabled: {
    default: ExtendedColor['darkLevel.500']
  },
  cpn_btn_secondary_content_focus: {
    default: ExtendedColor['primary_dark.500']
  }
};

const textButtons = {
  cpn_txt_btn_primary_content_default: {
    default: ExtendedColor['primary_dark.500']
  },
  cpn_txt_btn_primary_content_hover: {
    default: ExtendedColor['primary_dark.300']
  },
  cpn_txt_btn_primary_content_disabled: {
    default: ExtendedColor['darkLevel.500']
  },
  cpn_txt_btn_primary_background_hover: {
    default: 'rgba(7, 132, 242, .16)'
  },

  cpn_txt_btn_secondary_content_default: {
    default: ExtendedColor['darkLevel.200']
  },
  cpn_txt_btn_secondary_background_hover: {
    default: ExtendedColor['darkLevel.600']
  },
  cpn_txt_btn_secondary_content_disable: {
    default: ExtendedColor['darkLevel.500']
  },

  cpn_txt_btn_danger_background_hover: {
    default: 'rgba(204, 63, 72, .18)'
  },
  cpn_txt_btn_danger_content_hover: {
    default: ColorToken.error_light
  },
  cpn_txt_btn_danger_content_default: {
    default: ColorToken.error_base
  },
  cpn_txt_btn_danger_content_disable: {
    default: ExtendedColor['darkLevel.500']
  }
};

const buttonTertiarySet = {
  cpn_btn_neutral_content_default: {
    default: 'rgba(255, 255, 255, .72)' // white
  },
  cpn_btn_neutral_content_disabled: {
    default: ExtendedColor['darkLevel.500']
  },

  cpn_btn_neutral_background_loading: {
    default: ExtendedColor['darkLevel.500']
  },
  cpn_btn_neutral_background_default: {
    default: ExtendedColor['darkLevel.700']
  },
  cpn_btn_neutral_background_hover: {
    default: ExtendedColor['darkLevel.600']
  },
  cpn_btn_neutral_stroke_disable: {
    default: ExtendedColor['darkLevel.500']
  }
};

export const btnTokens = {
  ...primarySet,
  ...secondarySet,
  ...textButtons,
  ...buttonTertiarySet
};
