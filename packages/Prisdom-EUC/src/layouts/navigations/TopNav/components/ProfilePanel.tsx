import {
  Flex,
  chakra,
  Text,
  Center,
  Divider,
  HStack,
  Box,
  RadioGroup,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';
import { styles } from './styles';
import BadgeInfo from 'component-ui/Badges/BadgeInfor';
import { TextLayer } from 'theme/typography/interfaces';
import { PriscoinIconFilled } from 'theme/icons/SVGs/priscoin';
import { ColorToken, TypoToken } from 'theme/base/interfaces';
import { CourseIconFilled } from 'theme/icons/SVGs/course';
import PrisButton from 'component-ui/buttons/PrisButton';
import TextButton from 'component-ui/buttons/TextButton';
import ProfilePanelSettingNav from './ProfilePanelSettingNav';
import { ProfileIconOutlined } from 'theme/icons/SVGs/profile';
import { ThemeIconOutlined } from 'theme/icons/SVGs/theme';
import { LanguageIconOutlined } from 'theme/icons/SVGs/language';
import { LogoutIconOutlined } from 'theme/icons/SVGs/logOut';
import { ExtendedColor } from 'theme/colors/interfaces';
import { ProfileSettingEnum, UserType } from 'models/user';
import { Fragment, useState } from 'react';
import { ArrowRightIconOutlined } from 'theme/icons/SVGs/arrow';
import SwitchSettingButton, {
  SwitchSettingButtonProps
} from './SwitchSettingButton';
import {
  IncognitoIconFilled,
  IncognitoIconOutlined
} from 'theme/icons/SVGs/incognito';
import {
  LearnerIconFilled,
  LearnerIconOutlined
} from 'theme/icons/SVGs/learner';
import {
  InstructorIconFilled,
  InstructorIconOutlined
} from 'theme/icons/SVGs/instructor';
import { UKFlagIcon, VietnamFlagIcon } from 'theme/icons/SVGs/flag';
import 'theme/globalCSS/animation.css';
import { PrisPopover } from 'component-ui/PrisPopover';

export interface IProfilePanelProps {
  isShow: boolean;
  imgSrc: string;
  userName: string;
  userType: UserType;
  onClickOutSide(): void;
}

export enum PanelMode {
  DEFAULT,
  THEME,
  PROFILE,
  LANGUAGE
}

const ProfilePanel = (props: IProfilePanelProps) => {
  const { isShow, imgSrc, userName, userType, onClickOutSide } =
    props;
  const [panelMode, setPanelMode] = useState(PanelMode.DEFAULT);
  const [profileChoice, setProfileChoice] = useState(
    ProfileSettingEnum.LEARNER
  );
  const [themeChoice, setThemeChoice] = useState(
    ProfileSettingEnum.DARK
  );
  const [langChoice, setLangChoice] = useState(ProfileSettingEnum.UK);

  function _renderCourseAndPointInfo() {
    return (
      <Flex alignItems={'center'}>
        <HStack mr=".5rem">
          <Center
            p="4px"
            borderRadius={'50%'}
            mr=".1rem"
            bg={ColorToken.warning_darker}
          >
            <PriscoinIconFilled
              boxSize={'1rem'}
              fill={ColorToken.warning_light}
            />
          </Center>
          <Text
            layerStyle={TextLayer.smallBoldNormalX}
            color={TypoToken.type_neutral_default}
          >
            1245
          </Text>
        </HStack>
        <Divider orientation="vertical" h="8px" />
        <HStack ml=".5rem">
          <Center
            p="4px"
            borderRadius={'50%'}
            bg={ColorToken.primary_base}
            mr=".1rem"
          >
            <CourseIconFilled
              boxSize={'1rem'}
              fill={ColorToken.primary_lighter}
            />
          </Center>

          <Text
            layerStyle={TextLayer.smallBoldNormalX}
            color={TypoToken.type_neutral_default}
          >
            21
          </Text>
        </HStack>
      </Flex>
    );
  }

  function _renderMenuLists() {
    const data = [
      {
        Icon: ProfileIconOutlined,
        title: 'Profile',
        subTitle: 'Learner',
        className: 'settingNav',
        onClick: () => setPanelMode(PanelMode.PROFILE)
      },
      {
        Icon: ThemeIconOutlined,
        title: 'Theme',
        subTitle: 'System default',
        className: 'settingNav',
        onClick: () => setPanelMode(PanelMode.THEME)
      },
      {
        Icon: LanguageIconOutlined,
        title: 'Language',
        subTitle: 'English',
        className: 'settingNav',
        onClick: () => setPanelMode(PanelMode.LANGUAGE)
      }
    ];
    return (
      <Box mx="1rem">
        {data.map((itemProps) => (
          <ProfilePanelSettingNav
            key={itemProps.title}
            {...itemProps}
          />
        ))}
      </Box>
    );
  }

  function _renderAvatarInfoContainer() {
    return (
      <Fragment>
        <LinkBox sx={styles.linkBox}>
          <HStack
            sx={styles.avatarInfoContainer}
            className="avatarInfoContainer"
          >
            <chakra.img
              sx={styles.bigProfileImg}
              borderColor={`${bgColor} !important`}
              src={imgSrc}
            />
            <Box mr="6rem">
              <LinkOverlay href="#">
                <Text
                  layerStyle={TextLayer.mediumBold}
                  color={TypoToken.type_neutral_hard}
                  mb=".2rem"
                >
                  {userName}
                </Text>
              </LinkOverlay>
              {_renderCourseAndPointInfo()}
            </Box>
            <BadgeInfo
              badgeType="round"
              bgColor={ColorToken.warning_light}
              color={ColorToken.warning_darker}
              justifySelf={'flex-end'}
              ml="auto !important"
            >
              2
            </BadgeInfo>
          </HStack>
        </LinkBox>
        <Divider mb="1.5rem" />
      </Fragment>
    );
  }

  function _renderMainPanel() {
    return (
      <Fragment>
        <HStack px="1rem" w="100%">
          <Text layerStyle={TextLayer.mediumBold} mr="auto">
            Settings
          </Text>
          <TextButton size={'sm'}>More</TextButton>
        </HStack>
        {_renderMenuLists()}
        <Box px="1rem" w="100%" mb="1.75rem">
          <PrisButton
            size={'lg'}
            w="100%"
            mt="1.5rem"
            variant={'tertiary'}
          >
            <LogoutIconOutlined
              boxSize={'1.5rem'}
              fill={ExtendedColor['darkLevel.200']}
              mr=".75rem"
            />
            <Text layerStyle={TextLayer.baseBoldNormal}>Log out</Text>
          </PrisButton>
        </Box>
      </Fragment>
    );
  }

  function _backToMainPanel() {
    setPanelMode(PanelMode.DEFAULT);
  }
  function _renderSubPanelHeaders(headerTitle: string) {
    return (
      <HStack w="100%" mb="1rem">
        <PrisButton
          variant={'tertiary'}
          boxSize={'2.25rem !important'}
          minW="0"
          borderRadius={'50%'}
          onClick={_backToMainPanel}
        >
          <ArrowRightIconOutlined
            boxSize={'1.25rem'}
            transform={'rotate(180deg)'}
            fill={ExtendedColor['darkLevel.200']}
          />
        </PrisButton>
        <Text
          layerStyle={TextLayer.mediumBold}
          as="h3"
          ml=".6rem !important"
        >
          {headerTitle}
        </Text>
        <TextButton size={'sm'} ml="auto !important">
          More
        </TextButton>
      </HStack>
    );
  }
  function _renderProfilePanel() {
    const itemListData: SwitchSettingButtonProps[] = [
      {
        IconNormal: LearnerIconOutlined,
        IconWhenActive: LearnerIconFilled,
        title: 'learner',
        radioValue: ProfileSettingEnum.LEARNER,
        isChecked: profileChoice === ProfileSettingEnum.LEARNER,
        onClick: () => setProfileChoice(ProfileSettingEnum.LEARNER)
      },
      {
        IconNormal: InstructorIconOutlined,
        IconWhenActive: InstructorIconFilled,
        title: 'instructor',
        radioValue: ProfileSettingEnum.INSTRUCTOR,
        isChecked: profileChoice === ProfileSettingEnum.INSTRUCTOR,
        onClick: () => setProfileChoice(ProfileSettingEnum.INSTRUCTOR)
      },
      {
        IconNormal: IncognitoIconOutlined,
        IconWhenActive: IncognitoIconFilled,
        title: 'incognito',
        radioValue: ProfileSettingEnum.INCOGNITO,
        isChecked: profileChoice === ProfileSettingEnum.INCOGNITO,
        onClick: () => setProfileChoice(ProfileSettingEnum.INCOGNITO)
      }
    ];
    return (
      <Box px="1rem" w="100%">
        {_renderSubPanelHeaders('Switch profile')}
        <RadioGroup
          value={profileChoice}
          onChange={(val) =>
            setProfileChoice(val as ProfileSettingEnum)
          }
        >
          {itemListData.map((propsData) => (
            <SwitchSettingButton
              className="switchButton slideInAnimation"
              key={propsData.title}
              {...propsData}
            />
          ))}
        </RadioGroup>
      </Box>
    );
  }

  function _renderThemePanel() {
    const itemListData: SwitchSettingButtonProps[] = [
      {
        title: 'system default',
        radioValue: ProfileSettingEnum.SYSTEM_DEFAULT,
        isChecked: themeChoice === ProfileSettingEnum.SYSTEM_DEFAULT,
        onClick: () =>
          setThemeChoice(ProfileSettingEnum.SYSTEM_DEFAULT)
      },
      {
        title: 'dark',
        radioValue: ProfileSettingEnum.DARK,
        isChecked: themeChoice === ProfileSettingEnum.DARK,
        onClick: () => setThemeChoice(ProfileSettingEnum.DARK)
      },
      {
        title: 'light',
        radioValue: ProfileSettingEnum.LIGHT,
        isChecked: themeChoice === ProfileSettingEnum.LIGHT,
        onClick: () => setThemeChoice(ProfileSettingEnum.LIGHT)
      }
    ];

    return (
      <Box px="1rem" w="100%">
        {_renderSubPanelHeaders('Switch theme')}
        <RadioGroup
          value={themeChoice}
          onChange={(val) =>
            setThemeChoice(val as ProfileSettingEnum)
          }
        >
          {itemListData.map((propsData) => (
            <SwitchSettingButton
              className="switchButton slideInAnimation"
              key={propsData.title}
              {...propsData}
            />
          ))}
        </RadioGroup>
      </Box>
    );
  }

  function _renderLanguagePanel() {
    const itemListData: SwitchSettingButtonProps[] = [
      {
        IconNormal: VietnamFlagIcon,
        title: 'Vietnamese',
        radioValue: ProfileSettingEnum.VN,
        isChecked: langChoice === ProfileSettingEnum.VN,
        onClick: () => setLangChoice(ProfileSettingEnum.VN)
      },
      {
        IconNormal: UKFlagIcon,
        title: 'English',
        radioValue: ProfileSettingEnum.UK,
        isChecked: langChoice === ProfileSettingEnum.UK,
        onClick: () => setLangChoice(ProfileSettingEnum.UK)
      }
    ];

    return (
      <Box px="1rem" w="100%">
        {_renderSubPanelHeaders('Switch language')}
        <RadioGroup
          value={langChoice}
          onChange={(val) => setLangChoice(val as ProfileSettingEnum)}
        >
          {itemListData.map((propsData) => (
            <SwitchSettingButton
              className="switchButton slideInAnimation"
              key={propsData.title}
              {...propsData}
            />
          ))}
        </RadioGroup>
      </Box>
    );
  }

  function _renderPanelBasedOnMode() {
    let renderer = _renderMainPanel();

    switch (panelMode) {
      case PanelMode.PROFILE:
        renderer = _renderProfilePanel();
        break;
      case PanelMode.THEME:
        renderer = _renderThemePanel();
        break;
      case PanelMode.LANGUAGE:
        renderer = _renderLanguagePanel();
        break;
    }

    return renderer;
  }

  const bgColor =
    userType === 'learner'
      ? ExtendedColor['darkLevel.100']
      : ColorToken.primary_base;

  return (
    <PrisPopover
      isShow={isShow}
      onClickOutside={onClickOutSide}
      sx={styles.profilePanel}
      id="profile-panel"
    >
      {_renderAvatarInfoContainer()}
      {_renderPanelBasedOnMode()}
    </PrisPopover>
  );
};

export default ProfilePanel;
