import { ComponentStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { ExtendedColor } from "../colors/interfaces";

export const ButtonTheme: ComponentStyleConfig = {
  baseStyle: (props) => ({
    fontFamily: "content",
    borderRadius: ".5rem",
    color: mode(
      ExtendedColor["darkLevel.100"],
      ExtendedColor["darkLevel.100"]
    )(props),

    _disabled: {
      opacity: 1,
      pointerEvents: "none",
      cursor: "not-allowed !important",
    },
  }),

  defaultProps: {
    variant: "primary",
  },
};
