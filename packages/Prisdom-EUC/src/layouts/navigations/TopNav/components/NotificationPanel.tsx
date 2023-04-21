import {
  Box,
  Center,
  Divider,
  Flex,
  Img,
  Text,
  VStack
} from '@chakra-ui/react';
import AssistedChip from '@prisdom/component-ui/src/AssistedChip';
import PrisButton from '@prisdom/component-ui/src/buttons/PrisButton';
import TextButton from '@prisdom/component-ui/src/buttons/TextButton';
import NotificationCardInfo from '@prisdom/component-ui/src/Cards/NotificationCardInfo';
import { PrisPopover } from '@prisdom/component-ui/src/PrisPopover';
import useDraggableScroll from 'hooks/useDraggableScroll';
import {
  INotification,
  NotificationCategoryEnum
} from 'models/notification';
import { useRef, useState } from 'react';
import { TypoToken } from '@prisdom/theme/base/interfaces';
import {
  ArrowRightIconOutlined,
  ArrowLeftIconOutlined
} from '@prisdom/theme/icons/SVGs/arrow';
import { ReadAllIconOutlined } from '@prisdom/theme/icons/SVGs/readAll';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import { styles } from './styles';
import emptyStateImg from '@prisdom/theme/icons/Images/illustrations/NotificationIllus.png';
import { chipsArray } from '../staticData';

interface INotificationPanelProps {
  isShow: boolean;
  onClickOutside?(): void;
  notifications: INotification[];
}

let _shouldShowRightBtn = true;
let _shouldShowLeftBtn = false;

const NotificationPanel = (props: INotificationPanelProps) => {
  const { isShow, onClickOutside, notifications } = props;
  const ref = useRef<HTMLDivElement>(null);
  const draggable = useDraggableScroll(ref);
  const [slideButtonsShow, setSlideButtonsShow] = useState({
    left: false,
    right: false
  });

  const sliderDOM = ref.current;

  function _slideToEnd() {
    if (sliderDOM) {
      sliderDOM.scrollLeft += 400;
      _shouldShowRightBtn = false;
      _shouldShowLeftBtn = true;
      _setSlideButtonState();
    }
  }

  function _slideToStart() {
    if (sliderDOM) {
      sliderDOM.scrollLeft -= 400;
      _shouldShowRightBtn = true;
      _shouldShowLeftBtn = false;
      _setSlideButtonState();
    }
  }

  function _onMouseHover() {
    _setSlideButtonState();
  }

  function _setSlideButtonState() {
    setSlideButtonsShow({
      left: _shouldShowLeftBtn,
      right: _shouldShowRightBtn
    });
  }

  function _onMouseLeave() {
    setSlideButtonsShow({
      left: false,
      right: false
    });
  }

  function _renderHeadingSection() {
    const { left, right } = slideButtonsShow;
    return (
      <Box
        id="Notification-top"
        mt=".5rem"
        position="relative"
        onMouseEnter={_onMouseHover}
        onMouseLeave={_onMouseLeave}
      >
        <Flex p="1rem">
          <Text
            mr="auto"
            layerStyle={TextLayer.largeBoldX}
            color={TypoToken.type_neutral_hard}
          >
            Notification
          </Text>
          <TextButton size={'sm'}>
            <ReadAllIconOutlined
              boxSize={'1.2rem'}
              fill={'inherit'}
              mr=".5rem"
            />
            Mark all as read
          </TextButton>
        </Flex>
        <Flex
          mt="1.15rem"
          pr="1rem"
          overflowX={'hidden'}
          ref={ref}
          {...draggable}
        >
          {chipsArray.map((chip) => {
            return (
              <AssistedChip
                key={chip.title}
                variant={'elevator'}
                Icon={chip.Icon}
                userName={chip.title}
                ml=".7rem"
                flexShrink={0}
              />
            );
          })}
        </Flex>

        {left && (
          <PrisButton
            variant="tertiary"
            sx={styles.slideLeftBtn}
            onClick={_slideToStart}
          >
            <ArrowLeftIconOutlined fill={'inherited'} />
          </PrisButton>
        )}
        {right && (
          <PrisButton
            variant="tertiary"
            sx={styles.slideRightBtn}
            onClick={_slideToEnd}
          >
            <ArrowRightIconOutlined fill={'inherited'} />
          </PrisButton>
        )}
      </Box>
    );
  }

  function _renderNotificationHeading(
    noticTitle: string,
    link = '/'
  ) {
    return (
      <Flex mb=".2rem">
        <Text layerStyle={TextLayer.mediumBold} mr="auto">
          {noticTitle}
        </Text>
        <TextButton linkHref={link} size="sm">
          More
        </TextButton>
      </Flex>
    );
  }

  const notificationByCategory = {
    new: notifications.filter(
      (n) => n.category === NotificationCategoryEnum.NEW
    ),
    earlier: notifications.filter(
      (n) => n.category === NotificationCategoryEnum.EARLIER
    )
  };

  function _renderEmptyState() {
    return (
      <Center minH="30rem">
        <VStack>
          <Img src={emptyStateImg} boxSize={'11.8rem'} />
          <Text
            as="h3"
            layerStyle={TextLayer.largeMediumX}
            color={TypoToken.type_neutral_medium}
          >
            No notification yet
          </Text>
          <Text
            layerStyle={TextLayer.baseRegularNormal}
            color={TypoToken.type_neutral_light}
            w="70%"
            textAlign={'center'}
          >
            When you get notifications, they’ll show up here
          </Text>
        </VStack>
      </Center>
    );
  }

  function _renderNotificationList() {
    return (
      <Box
        sx={styles.notificationList}
        pt="1.6rem"
        id="notification-list"
      >
        <Box px="1rem">
          {_renderNotificationHeading('New')}
          <Box>
            {notificationByCategory.new.map((noticItem) => {
              return (
                <NotificationCardInfo
                  isShowActionButton={noticItem.isShowActionButton}
                  id={noticItem.id}
                  key={noticItem.id}
                  src={noticItem.src}
                  avatarName={noticItem.avatarName}
                  notificationTitle={noticItem.notificationTitle}
                  notificationState={noticItem.notificationState}
                />
              );
            })}
          </Box>
        </Box>
        <Box px="1rem" mt="2rem">
          {_renderNotificationHeading('Earlier')}
          <Box>
            {notificationByCategory.earlier.map((noticItem) => {
              return (
                <NotificationCardInfo
                  isShowActionButton={noticItem.isShowActionButton}
                  id={noticItem.id}
                  src={noticItem.src}
                  key={noticItem.id}
                  avatarName={noticItem.avatarName}
                  notificationTitle={noticItem.notificationTitle}
                  notificationState={noticItem.notificationState}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <PrisPopover
      sx={styles.notificationPanel}
      isShow={isShow}
      onClickOutside={onClickOutside}
    >
      <Box>
        {_renderHeadingSection()}
        <Divider variant={'v1'} mt="1.6rem" />

        {notifications.length === 0
          ? _renderEmptyState()
          : _renderNotificationList()}
      </Box>
    </PrisPopover>
  );
};

export default NotificationPanel;
