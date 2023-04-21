import {
  Button,
  ButtonProps,
  defineStyle,
  useStyleConfig
} from '@chakra-ui/react';

export interface FittingButtonProps extends ButtonProps {
  buttonType?: 'no-round' | 'round';
}

const PrisButtonSec = (props: FittingButtonProps) => {
  const {
    buttonType = 'no-round',
    variant,
    size,
    children,
    ...rest
  } = props;
  const themeStyle = useStyleConfig('PrisButtonSec', {
    size,
    variant
  });

  const style = defineStyle({
    button: {
      borderRadius: buttonType === 'no-round' ? '.5rem' : '10rem'
    }
  });

  return (
    <Button __css={themeStyle} {...rest} sx={style.button}>
      {children}
    </Button>
  );
};

export default PrisButtonSec;
