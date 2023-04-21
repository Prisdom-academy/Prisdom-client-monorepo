import { defineStyle } from "@chakra-ui/react";

export const globalStyle = defineStyle({
  html: {
    fontSize: {
      base: "85%",
      sm: "90%",
      md: "100%",
    },
    boxSizing: "border-box",
  },
  body: {
    fontFamily: "Inter",
    fontSize: "1rem",
    color: "gray.900",
  },
});
