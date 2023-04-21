import { ExtendedColor } from "../../colors/interfaces";

const checkBoxes = {
  cpn_check_box_bg_checkmark: {
    default: ExtendedColor["primary_dark.500"],
  },
  cpn_check_box_stroke_defaultHover: {
    default: ExtendedColor["primary_dark.500"],
  },
  cpn_check_box_content_disable: {
    default: "rgba(255, 255, 255, 0.16)",
  },
  cpn_check_box_stroke_disable: {
    default: "rgba(255, 255, 255, 0.16)",
  },
  cpn_check_box_bg_disable: {
    default: "rgba(255, 255, 255, 0.16)",
  },
};

export const cboxTokens = {
  ...checkBoxes,
};
