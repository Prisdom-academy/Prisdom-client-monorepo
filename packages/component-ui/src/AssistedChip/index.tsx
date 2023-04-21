import {
  Button,
  ButtonProps,
  ComponentWithAs,
  IconProps,
  Text,
  defineStyle,
} from "@chakra-ui/react";
import { useState } from "react";
import { TextLayer } from "@prisdom/theme/typography/interfaces";
import { ChipVariant, stylesGenerator } from "./styles";

export interface IAssistedChipProps extends ButtonProps {
  chipType?: "round" | "no-round";
  Icon?: ComponentWithAs<"svg", IconProps>;
  userName: string;
}

const AssistedChip = (props: IAssistedChipProps) => {
  const [selected, setSelected] = useState(false);

  const {
    chipType = "round",
    children,
    borderRadius,
    userName: title,
    variant = "default",
    Icon,
    ...rest
  } = props;

  const programmaticStyle = defineStyle({
    button: {
      borderRadius:
        borderRadius || (chipType === "no-round" ? ".5rem" : "10rem"),
    },
  });

  const styles = stylesGenerator(variant as ChipVariant);

  const chipStyle = {
    ...programmaticStyle.button,
    ...styles.chip,
    ...(selected ? styles.selectedChip : {}),
  };

  return (
    <Button
      data-testid="AssistedChip"
      sx={chipStyle}
      {...rest}
      onClick={() => setSelected(!selected)}
    >
      {Icon && <Icon boxSize={"1.25rem"} mr="8px" fill="inherit" />}
      <Text layerStyle={TextLayer.smallRegularNormal} color="inherit">
        {title}
      </Text>
    </Button>
  );
};

export default AssistedChip;
