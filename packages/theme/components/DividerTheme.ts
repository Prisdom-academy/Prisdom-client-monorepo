import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { ColorToken } from "../base/interfaces";
import { ExtendedColor } from "../colors/interfaces";

const decor = defineStyle({
  borderWidth: "6px",
  borderStyle: "solid",
  borderRadius: "10px",
  borderColor: ExtendedColor["primary_dark.500"],
});

const v3 = defineStyle({
  borderWidth: "2px",
  borderStyle: "solid",
  borderRadius: 10,
  borderColor: ColorToken.global_white_56,
});

const v2 = defineStyle({
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: 10,
  borderColor: ColorToken.global_white_56,
});

const v1 = defineStyle({
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: 10,
  borderColor: ColorToken.global_white_16,
});

export const dividerTheme = defineStyleConfig({
  baseStyle: {
    opacity: 1,
  },
  variants: { decor, v3, v2, v1 },
  defaultProps: {
    variant: "v1",
  },
});
