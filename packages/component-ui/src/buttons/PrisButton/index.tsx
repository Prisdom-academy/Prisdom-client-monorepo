import {
  Button,
  ButtonProps,
  defineStyle,
  useStyleConfig
} from '@chakra-ui/react';
import { ForwardedRef, forwardRef } from 'react';
import { TextLayer } from '@prisdom/theme/typography/interfaces';

export interface FittingButtonProps extends ButtonProps {
  buttonType?: 'no-round' | 'round';
  variant?: 'tertiary' | 'primary';
}

const PrisButton = forwardRef(function PrisButton(
  props: FittingButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const {
    buttonType = 'no-round',
    variant,
    size = 'sm',
    children,
    borderRadius,
    ...rest
  } = props;
  const themeStyle = useStyleConfig('PrisButton', {
    size,
    variant
  });

  const style = defineStyle({
    button: {
      borderRadius:
        borderRadius ||
        (buttonType === 'no-round' ? '.5rem' : '10rem')
    }
  });

  const layerStyleOnSize: { [key: string]: TextLayer } = {
    sm: TextLayer.smallBoldNormalX,
    md: TextLayer.smallBoldNormal,
    lg: TextLayer.baseBoldNormal,
    xlg: TextLayer.mediumBold
  };

  return (
    <Button
      __css={themeStyle}
      sx={style.button}
      layerStyle={layerStyleOnSize[size as string]}
      ref={ref}
      {...rest}
    >
      {children}
    </Button>
  );
});

export default PrisButton;
