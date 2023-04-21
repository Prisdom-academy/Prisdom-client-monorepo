import { ExtendedColor } from '../../colors/interfaces';

const primary = {
  primary_lighter: {
    default: ExtendedColor['primary_light.100'],
    _dark: ExtendedColor['primary_dark.100']
  },

  primary_light: {
    default: ExtendedColor['primary_light.300'],
    _dark: ExtendedColor['primary_dark.300']
  },

  primary_base: {
    default: ExtendedColor['primary_light.500'],
    _dark: ExtendedColor['primary_dark.500']
  },

  primary_dark: {
    default: ExtendedColor['primary_light.700'],
    _dark: ExtendedColor['primary_dark.700']
  },

  primary_darker: {
    default: ExtendedColor['primary_light.900'],
    _dark: ExtendedColor['primary_dark.900']
  }
};

const success = {
  success_lighter: {
    default: ExtendedColor['success_light.100'],
    _dark: ExtendedColor['success_dark.100']
  },

  success_light: {
    default: ExtendedColor['success_light.300'],
    _dark: ExtendedColor['success_dark.300']
  },

  success_base: {
    default: ExtendedColor['success_light.500'],
    _dark: ExtendedColor['success_dark.500']
  },

  success_dark: {
    default: ExtendedColor['success_light.700'],
    _dark: ExtendedColor['success_dark.700']
  },

  success_darker: {
    default: ExtendedColor['success_light.700'],
    _dark: ExtendedColor['success_dark.700']
  }
};

const warning = {
  warning_lighter: {
    default: ExtendedColor['warning_light.100'],
    _dark: ExtendedColor['warning_dark.100']
  },

  warning_light: {
    default: ExtendedColor['warning_light.300'],
    _dark: ExtendedColor['warning_dark.300']
  },

  warning_base: {
    default: ExtendedColor['warning_light.500'],
    _dark: ExtendedColor['warning_dark.500']
  },

  warning_dark: {
    default: ExtendedColor['warning_light.700'],
    _dark: ExtendedColor['warning_dark.700']
  },

  warning_darker: {
    default: ExtendedColor['warning_light.700'],
    _dark: ExtendedColor['warning_dark.700']
  }
};

const error = {
  error_lighter: {
    default: ExtendedColor['error_light.100'],
    _dark: ExtendedColor['error_dark.100']
  },

  error_light: {
    default: ExtendedColor['error_light.300'],
    _dark: ExtendedColor['error_dark.300']
  },

  error_base: {
    default: ExtendedColor['error_light.500'],
    _dark: ExtendedColor['error_dark.500']
  },

  error_dark: {
    default: ExtendedColor['error_light.700'],
    _dark: ExtendedColor['error_dark.700']
  },

  error_darker: {
    default: ExtendedColor['error_light.700'],
    _dark: ExtendedColor['error_dark.700']
  }
};

const info = {
  info_lighter: {
    default: ExtendedColor['info_light.100'],
    _dark: ExtendedColor['info_dark.100']
  },

  info_light: {
    default: ExtendedColor['info_light.300'],
    _dark: ExtendedColor['info_dark.300']
  },

  info_base: {
    default: ExtendedColor['info_light.500'],
    _dark: ExtendedColor['info_dark.500']
  },

  info_dark: {
    default: ExtendedColor['info_light.700'],
    _dark: ExtendedColor['info_dark.700']
  },

  info_darker: {
    default: ExtendedColor['info_light.700'],
    _dark: ExtendedColor['info_dark.700']
  }
};

const textToken = {
  text_normal: {
    default: ExtendedColor['darkLevel.900'],
    _dark: ExtendedColor['darkLevel.100']
  }
};

const white = {
  global_white_56: {
    default: 'rgba(255,255,255,.56)'
  },
  global_white_16: {
    default: 'rgba(255,255,255,.16)'
  }
};

const transparent = {
  global_dark_level_transparent_56: {
    default: 'rgba(22,28,36,.8)'
  },
  fake_shadow_background_info: {
    default: 'rgba(51, 102, 255, 0.24)'
  },
  global_success_transparent_16: {
    default: 'rgba(40, 189, 104, 0.16)'
  },
  global_success_transparent_32: {
    default: 'rgba(40, 189, 104, 0.32)'
  },
  global_primary_transparent_16: {
    default: 'rgba(7, 132, 242, 0.16)'
  },
  global_warning_transparent_16: {
    default: 'rgba(237, 176, 21, 0.16)'
  },
  global_dark_level_transparent_24: {
    default: 'rgba(22, 28, 36, 0.24)'
  },
  global_error_transparent_16: {
    default: 'rgba(204, 63, 72, 0.16)'
  },
  global_error_transparent_32: {
    default: 'rgba(204, 63, 72, 0.32)'
  }
};

// push the token here as you go
export const colorTokens = {
  ...primary,
  ...success,
  ...warning,
  ...error,
  ...info,
  ...textToken,
  ...white,
  ...transparent
};
