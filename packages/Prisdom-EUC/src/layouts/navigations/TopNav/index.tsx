import { navStyle } from './styles';
import { Divider, Flex, Img } from '@chakra-ui/react';
import DraggableIcon from '@prisdom/theme/icons/SVGs/draggable';
import Section from '@prisdom/component-ui/src/factoryComponent/SectionFactory';
import Nav from '@prisdom/component-ui/src/factoryComponent/NavFactory';
import LogoNav from '@prisdom/theme/icons/Images/LogoNav.png';
import NavSearchInput from '../../NavSearchInput.tsx';
import PrisButton from '@prisdom/component-ui/src/buttons/PrisButton';
import NotificationBell from 'layouts/navigations/TopNav/components/NotificationBell';
import TopBarAvatar from './components/TopBarAvatar';

interface ITopNavProps {
  userName: string;
  imgSrc: string;
  notificationCount: number;
  onMenuClick: () => void;
}

const TopNav = (props: ITopNavProps) => {
  const { userName, imgSrc, notificationCount, onMenuClick } = props;

  const _renderFirstSection = () => {
    return (
      <Flex align={'center'}>
        <DraggableIcon sx={navStyle.dragIcon} onClick={onMenuClick} />
        <Img src={LogoNav} w="6.5rem" ml="1rem" />
      </Flex>
    );
  };

  const _renderCenterSection = () => {
    return <NavSearchInput />;
  };

  const _renderRightSection = () => {
    return (
      <Flex alignItems={'center'}>
        <PrisButton variant={'primary'} disabled>
          Focus Now
        </PrisButton>
        <Divider
          variant={'v2'}
          orientation="vertical"
          marginLeft={'.8rem'}
          h="1rem"
        ></Divider>
        <NotificationBell notificationCount={notificationCount} />
        <TopBarAvatar
          userName={userName}
          imgSrc={imgSrc}
          notificationNumbers={0}
        />
      </Flex>
    );
  };

  return (
    <Nav sx={navStyle.root}>
      <Section id="left">{_renderFirstSection()}</Section>
      <Section id="center">{_renderCenterSection()}</Section>
      <Section id="right">{_renderRightSection()}</Section>
    </Nav>
  );
};

export default TopNav;
