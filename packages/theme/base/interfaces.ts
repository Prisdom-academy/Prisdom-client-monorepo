export enum FontFamily {
  title = 'title',
  content = 'content'
}

export enum ColorToken {
  primary_base = 'primary_base',
  primary_light = 'primary_light',
  primary_lighter = 'primary_lighter',
  primary_dark = 'primary_dark',
  primary_darker = 'primary_darker',

  success_base = 'success_base',
  success_light = 'success_light',
  success_lighter = 'success_lighter',
  success_dark = 'success_dark',
  success_darker = 'success_darker',

  info_base = 'info_base',
  info_light = 'info_light',
  info_lighter = 'info_lighter',
  info_dark = 'info_dark',
  info_darker = 'info_darker',

  warning_base = 'warning_base',
  warning_light = 'warning_light',
  warning_lighter = 'warning_lighter',
  warning_dark = 'warning_dark',
  warning_darker = 'warning_darker',

  error_base = 'error_base',
  error_light = 'error_light',
  error_lighter = 'error_lighter',
  error_dark = 'error_dark',
  error_darker = 'error_darker',

  text_normal = 'text_normal',

  global_white_56 = 'global_white_56',
  global_white_16 = 'global_white_16',

  global_dark_level_transparent_56 = 'global_dark_level_transparent_56',
  global_dark_level_transparent_48 = 'global_dark_level_transparent_48',
  global_dark_level_transparent_32 = 'global_dark_level_transparent_32',
  fake_shadow_background_info = 'fake_shadow_background_info',
  global_success_transparent_16 = 'global_success_transparent_16',
  global_warning_transparent_16 = 'global_warning_transparent_16',
  global_primary_transparent_16 = 'global_primary_transparent_16',
  global_dark_level_transparent_24 = 'global_dark_level_transparent_24',
  global_success_transparent_32 = 'global_success_transparent_32',
  global_error_transparent_16 = 'global_error_transparent_16',
  global_error_transparent_32 = 'global_error_transparent_32',
  global_dark_level_transparent_86 = 'global_dark_level_transparent_86'
}

export enum ShadowToken {
  z1 = 'z1',
  z4 = 'z4',
  z8 = 'z8',
  z12 = 'z12',
  z16 = 'z16',
  z20 = 'z20',
  z24 = 'z24',

  card = 'card',
  dialog = 'dialog',
  dropdown = 'dropdown',

  color_primary = 'color_primary',
  color_success = 'color_success',

  checkbox_default_hover = 'checkbox_default_hover',
  shadow_color_infor = 'shadow_color_infor'
}

export enum ButtonTokenColor {
  cpn_btn_primary_background_default = 'cpn_btn_primary_background_default',
  cpn_btn_primary_background_hover = 'cpn_btn_primary_background_hover',
  cpn_btn_primary_background_loading = 'cpn_btn_primary_background_loading',
  cpn_btn_primary_background_disabled = 'cpn_btn_primary_background_disabled',
  cpn_btn_primary_background_focus = 'cpn_btn_primary_background_focus',
  cpn_btn_primary_content_disable = 'cpn_btn_primary_content_disable',

  cpn_btn_secondary_background_default = 'cpn_btn_secondary_background_default',
  cpn_btn_secondary_content_default = 'cpn_btn_secondary_content_default',
  cpn_btn_secondary_content_hover = 'cpn_btn_secondary_content_hover',
  cpn_btn_secondary_content_loading = 'cpn_btn_secondary_content_loading',
  cpn_btn_secondary_content_disabled = 'cpn_btn_secondary_content_disabled',
  cpn_btn_secondary_content_focus = 'cpn_btn_secondary_content_focus',

  cpn_txt_btn_primary_content_default = 'cpn_txt_btn_primary_content_default',
  cpn_txt_btn_primary_content_hover = 'cpn_txt_btn_primary_content_hover',
  cpn_txt_btn_primary_content_disabled = 'cpn_txt_btn_primary_content_disabled',
  cpn_txt_btn_primary_background_hover = 'cpn_txt_btn_primary_background_hover',

  cpn_txt_btn_secondary_content_default = 'cpn_txt_btn_secondary_content_default',

  cpn_btn_neutral_content_default = 'cpn_btn_neutral_content_default',
  cpn_btn_neutral_content_disabled = 'cpn_btn_neutral_content_disabled',
  cpn_btn_neutral_background_default = 'cpn_btn_neutral_background_default',
  cpn_btn_neutral_background_hover = 'cpn_btn_neutral_background_hover',
  cpn_btn_neutral_stroke_disable = 'cpn_btn_neutral_stroke_disable',
  cpn_btn_neutral_background_loading = 'cpn_btn_neutral_background_loading',

  cpn_txt_btn_danger_background_hover = 'cpn_txt_btn_danger_background_hover',
  cpn_txt_btn_danger_content_hover = 'cpn_txt_btn_danger_content_hover',
  cpn_txt_btn_danger_content_default = 'cpn_txt_btn_danger_content_default',
  cpn_txt_btn_danger_content_disable = 'cpn_txt_btn_danger_content_disable',
  cpn_txt_btn_secondary_background_hover = 'cpn_txt_btn_secondary_background_hover',
  cpn_txt_btn_secondary_content_disable = 'cpn_txt_btn_secondary_content_disable',
  cpn_txt_btn_secondary_content_hover = 'cpn_txt_btn_secondary_content_hover'
}

export enum CheckBoxTokenColor {
  cpn_check_box_bg_checkmark = 'cpn_check_box_bg_checkmark',
  cpn_check_box_stroke_defaultHover = 'cpn_check_box_stroke_defaultHover',
  cpn_check_box_content_disable = 'cpn_check_box_content_disable',
  cpn_check_box_stroke_disable = 'cpn_check_box_stroke_disable',
  cpn_check_box_bg_disable = 'cpn_check_box_bg_disable',
  cpn_check_box_stroke_default = 'cpn_check_box_stroke_default'
}

export enum BorderToken {
  cpn_check_box_stroke_disable = 'cpn_check_box_stroke_disable'
}

export enum ChipToken {
  cpn_chips_content_00_default = 'cpn_chips_content_00_default',
  cpn_chips_stroke_00_default = 'cpn_chips_stroke_00_default',
  cpn_chips_bg0_00_hovered = 'cpn_chips_bg0_00_hovered',
  cpn_chips_stroke_00_hovered = 'cpn_chips_stroke_00_hovered',
  cpn_chips_stroke_00_pressed = 'cpn_chips_stroke_00_pressed',
  cpn_chips_bg0_s0_default = 'cpn_chips_bg0_s0_default',
  cpn_chips_content_s0_default = 'cpn_chips_content_s0_default',
  cpn_chips_content_s0_hovered = 'cpn_chips_content_s0_hovered',
  cpn_chips_icon_bg_s0_hovered = 'cpn_chips_icon_bg_s0_hovered',
  cpn_chips_bg0_s0_pressed = 'cpn_chips_bg0_s0_pressed',
  cpn_chips_bg0_0e_default = 'cpn_chips_bg0_0e_default',
  cpn_chips_bg0_se_default = 'cpn_chips_bg0_se_default',
  cpn_chips_content_se_default = 'cpn_chips_content_se_default',
  cpn_chips_content_se_hovered = 'cpn_chips_content_se_hovered',
  cpn_chips_icon_bg_se_hovered = 'cpn_chips_icon_bg_se_hovered',
  cpn_chips_bg0_se_pressed = 'cpn_chips_bg0_se_pressed',
  cpn_chips_bg_0_00_focused = 'cpn_chips_bg_0_00_focused',
  cpn_chips_content_0_00_focused = 'cpn_chips_content_0_00_focused',
  cpn_chips_content_00_disabled = 'cpn_chips_content_00_disabled',
  cpn_chips_content_0e_default = 'cpn_chips_content_0e_default',
  cpn_chips_content_0e_focused = 'cpn_chips_content_0e_focused',
  cpn_chips_bg_0e_focused = 'cpn_chips_bg_0e_focused',
  cpn_chips_0e_disabled = 'cpn_chips_0e_disabled'
}

export enum TypoToken {
  type_neutral_default = 'type_neutral_default',
  type_neutral_disable = 'type_neutral_disable',
  type_link_focus = 'type_link_focus',
  type_placeholder = 'type_placeholder',
  type_neutral_hard = 'type_neutral_hard',
  type_neutral_medium = 'type_neutral_medium',
  type_neutral_light = 'type_neutral_light',
  type_link_default = 'type_link_default',
  type_link_hover = 'type_link_hover'
}

export enum CollapsibleNavToken {
  cpn_nav_ver_content_inactive = 'cpn_nav_ver_content_inactive',
  cpn_nav_ver_arrow_inactive = 'cpn_nav_ver_arrow_inactive',
  cpn_nav_ver_bg_inactive = 'cpn_nav_ver_bg_inactive',
  cpn_nav_ver_content_active = 'cpn_nav_ver_content_active',
  cpn_nav_ver_arrow_active = 'cpn_nav_ver_arrow_active',
  cpn_nav_ver_bg_active = 'cpn_nav_ver_bg_active'
}
