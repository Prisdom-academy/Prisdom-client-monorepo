import {
  Avatar,
  AvatarBadge,
  useDisclosure,
  chakra
} from '@chakra-ui/react';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';
import ProfilePanel from './ProfilePanel';
import BadgeInfo from 'component-ui/Badges/BadgeInfor';
import { styles } from './styles';

export interface ITopBarNavProps {
  userName: string;
  imgSrc: string;
  notificationNumbers: number;
}

const TopBarAvatar = (props: ITopBarNavProps) => {
  const { userName, imgSrc, notificationNumbers } = props;
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <chakra.div>
      {notificationNumbers > 0 && (
        <BadgeInfo
          badgeType="round"
          sx={styles.avatarBadge}
          transform={'scale(.9)'}
        >
          {notificationNumbers}
        </BadgeInfo>
      )}
      <Avatar
        name={userName}
        src={imgSrc}
        ml="1.5rem"
        boxSize={'40px'}
        cursor="pointer"
        onClick={onToggle}
      >
        <AvatarBadge
          borderColor={NavTokenColor.alias_neutral_bg_2}
          bg={ExtendedColor['success_dark.500']}
          boxSize="1rem"
          border="2px solid"
        />
      </Avatar>
      <ProfilePanel
        isShow={isOpen}
        imgSrc={imgSrc}
        userName={userName}
        userType="learner"
        onClickOutSide={onClose}
      />
    </chakra.div>
  );
};

export default TopBarAvatar;
