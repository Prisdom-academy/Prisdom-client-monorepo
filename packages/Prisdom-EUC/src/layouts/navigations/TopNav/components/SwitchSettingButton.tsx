import {
  ComponentWithAs,
  HStack,
  IconProps,
  Radio,
  Text
} from '@chakra-ui/react';
import { startCase } from 'lodash';
import { NavTokenColor } from '@prisdom/theme/base/aliasTokens/interfaces';
import { ExtendedColor } from '@prisdom/theme/colors/interfaces';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import { styles } from './styles';

export interface SwitchSettingButtonProps {
  IconNormal?: ComponentWithAs<'svg', IconProps>;
  title: string;
  radioValue: string;
  isChecked: boolean;
  radioName?: string;
  IconWhenActive?: ComponentWithAs<'svg', IconProps>;
  onClick?: () => void;
  className?: string;
}

const SwitchSettingButton = (props: SwitchSettingButtonProps) => {
  const {
    IconNormal,
    IconWhenActive = IconNormal,
    title,
    radioName,
    radioValue,
    onClick,
    className,
    isChecked
  } = props;

  let wrapperStyle = styles.switchButtonWrapper;
  if (isChecked) {
    wrapperStyle = {
      ...styles.switchButtonWrapper,
      ...styles.switchButtonBgActive
    } as any;
  }

  const contentColorWhenActive = isChecked
    ? NavTokenColor.cpn_nav_ver_content_active
    : ExtendedColor['darkLevel.100'];

  const iconStyles = {
    fill: contentColorWhenActive,
    boxSize: '1.5rem',
    mr: '.78rem'
  };

  const _renderIcon = () => {
    if (IconNormal && IconWhenActive) {
      return !isChecked ? (
        <IconNormal {...iconStyles} />
      ) : (
        <IconWhenActive {...iconStyles} />
      );
    } else {
      return null;
    }
  };

  return (
    <HStack sx={wrapperStyle} className={className} onClick={onClick}>
      {_renderIcon()}
      <Text
        layerStyle={TextLayer.baseRegularNormal}
        mr="auto !important"
        color={contentColorWhenActive}
      >
        {startCase(title)}
      </Text>
      <Radio name={radioName} value={radioValue} size={'lg'} />
    </HStack>
  );
};

export default SwitchSettingButton;
