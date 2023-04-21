import {
  Button,
  ButtonProps,
  defineStyle,
  useStyleConfig,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TextLayer } from "@prisdom/theme/typography/interfaces";

export interface TextButtonProps extends ButtonProps {
  buttonType?: "no-round" | "round";
  linkHref?: string;
}

/**
 * TextButton work as a link / <a> tag
 * @param props linkHref is relative path
 * @returns JSX.Element
 */
const TextButton = (props: TextButtonProps) => {
  const {
    buttonType = "no-round",
    variant,
    size,
    children,
    linkHref,
    ...rest
  } = props;
  const themeStyle = useStyleConfig("TextButton", { size, variant });

  const style = defineStyle({
    button: {
      borderRadius: buttonType === "no-round" ? ".5rem" : "10rem",
    },
  });

  return (
    <Button
      __css={themeStyle}
      {...rest}
      sx={style.button}
      layerStyle={TextLayer.smallBoldNormalX}
    >
      {linkHref ? <Link to={linkHref}>{children}</Link> : children}
    </Button>
  );
};

export default TextButton;
