import { Button, ButtonProps, Text } from '@chakra-ui/react';
import { stylesCompute } from './styles';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import {
  GithubLogo,
  GoogleFullColor,
  GoogleLogo
} from '@prisdom/theme/icons/SVGs/platform';

interface IPlatformSigninButtonProps extends ButtonProps {
  variant?: 'default' | 'outlined';
  platform?: 'google' | 'github';
}

const PlatformSigninButton = (props: IPlatformSigninButtonProps) => {
  const { variant = 'default', platform = 'google', ...rest } = props;
  const styles = stylesCompute(variant);

  function _renderBtnChildrenDefault() {
    switch (platform) {
      case 'google':
        return (
          <>
            {rest.isDisabled || variant === 'outlined' ? (
              <GoogleLogo sx={styles.logo} fill={'inherit'} />
            ) : (
              <GoogleFullColor sx={styles.logo} />
            )}
            <Text
              layerStyle={TextLayer.baseBoldNormal}
              color={'inherit'}
            >
              Sign in with Google
            </Text>
          </>
        );
      case 'github':
        return (
          <>
            <GithubLogo sx={styles.logo} />
            <Text
              layerStyle={TextLayer.baseBoldNormal}
              color={'inherit'}
            >
              Sign in with Github
            </Text>
          </>
        );

      default:
        break;
    }
  }

  return (
    <Button {...rest} sx={styles.root} data-testid="PLATFORM_SIGNIN">
      {_renderBtnChildrenDefault()}
    </Button>
  );
};

export default PlatformSigninButton;
