import {
  Box,
  ComponentWithAs,
  Flex,
  IconProps,
  Text
} from '@chakra-ui/react';
import { ExtendedColor } from 'theme/colors/interfaces';
import { ArrowRightIconOutlined } from 'theme/icons/SVGs/arrow';
import { TextLayer } from 'theme/typography/interfaces';
import { styles } from './styles';

interface IProfilePanelSettingNavProps {
  disabled?: boolean;
  Icon: ComponentWithAs<'svg', IconProps>;
  title: string;
  subTitle: string;
  className?: string;
  onClick?: () => void;
}

const ProfilePanelSettingNav = (
  props: IProfilePanelSettingNavProps
) => {
  const {
    disabled = false,
    Icon,
    title,
    subTitle,
    className,
    onClick
  } = props;

  let settingNavStyles = styles.settingNav;

  if (disabled) {
    settingNavStyles = {
      ...styles.settingNav,
      ...styles.settingNavDisabled
    };
  }

  const iconStyles = {
    boxSize: '1.5rem',
    fill: ExtendedColor['darkLevel.200'],
    mr: '1rem'
  };

  return (
    <Flex
      sx={settingNavStyles}
      className={className}
      onClick={onClick}
    >
      <Icon {...iconStyles} />
      <Box mr="auto">
        <Text as={'h4'} layerStyle={TextLayer.baseRegularNormal}>
          {title}
        </Text>
        <Text
          opacity={0.6}
          layerStyle={TextLayer.smallRegularNormalX}
        >
          {subTitle}
        </Text>
      </Box>
      <ArrowRightIconOutlined
        boxSize={'1rem'}
        fill={ExtendedColor['darkLevel.300']}
      />
    </Flex>
  );
};

export default ProfilePanelSettingNav;
