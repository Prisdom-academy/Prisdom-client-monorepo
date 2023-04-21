import {
  Avatar,
  Box,
  Center,
  Flex,
  FlexProps,
  Highlight,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import PrisButton from "../../buttons/PrisButton";
import { NotificationTemplate } from "models/notification";
import { useState } from "react";
import { TypoToken } from "@prisdom/theme/base/interfaces";
import { ExtendedColor } from "@prisdom/theme/colors/interfaces";
import { MoreIcon } from "@prisdom/theme/icons/SVGs/more";
import { TextLayer } from "@prisdom/theme/typography/interfaces";
import { getOriginalStringFromTemplate } from "utils/notificationUtils";
import { styles } from "./styles";
import "./additional.css";
import CheckIcon from "@prisdom/theme/icons/SVGs/check";
import { TrashIconOutlined } from "@prisdom/theme/icons/SVGs/trash";

interface INotificationCardInfoProps extends FlexProps {
  id: string;
  src: string;
  avatarName: string;
  notificationTitle: NotificationTemplate;
  onApprove?: () => void;
  onDecline?: () => void;
  isShowActionButton?: boolean;
  notificationState: "read" | "unread";
}

const NotificationCardInfo = (props: INotificationCardInfoProps) => {
  const {
    src,
    avatarName,
    notificationTitle,
    id,
    onApprove,
    onDecline,
    isShowActionButton = false,
    notificationState,
    ...rest
  } = props;
  const { originalStr, highlightKeyword } =
    getOriginalStringFromTemplate(notificationTitle);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const isNotificationUnread = notificationState === "unread";

  function _renderBlueDot() {
    return (
      <Center>
        <Box
          boxSize={"1.15rem"}
          bgColor={ExtendedColor["primary_dark.500"]}
          borderRadius="50%"
          border="2px solid"
          borderColor={ExtendedColor["darkLevel.800"]}
        ></Box>
      </Center>
    );
  }

  function _renderActions() {
    return (
      <Flex w="100%" mt="1.3rem">
        <PrisButton ml="auto" mr=".4rem" onClick={onApprove}>
          Approve
        </PrisButton>
        <PrisButton variant="tertiary" mr=".3rem" onClick={onDecline}>
          Decline
        </PrisButton>
      </Flex>
    );
  }

  function _render3DotMenu() {
    return (
      <Menu placement="left-end">
        <MenuButton
          as={PrisButton}
          variant="tertiary"
          sx={styles.moreActionButton}
        >
          <MoreIcon fill="inherit" boxSize={"1.25rem"} />
        </MenuButton>
        <MenuList
          minWidth="16rem"
          transform={"translate(13px, 3px) !important"}
        >
          <MenuItem
            layerStyle={TextLayer.smallBoldNormal}
            icon={<CheckIcon fill={"inherit"} boxSize="1.25rem" />}
          >
            Mark as read
          </MenuItem>
          <MenuDivider />
          <MenuItem
            sx={styles.trashMenuItem}
            layerStyle={TextLayer.smallBoldNormal}
            icon={<TrashIconOutlined fill={"inherit"} boxSize="1.25rem" />}
          >
            Remove this notification
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }

  const textColor = isNotificationUnread
    ? TypoToken.type_neutral_default
    : TypoToken.type_neutral_disable;

  const timeColor = isNotificationUnread
    ? TypoToken.type_link_focus
    : TypoToken.type_neutral_disable;
  const timeTextStyle = isNotificationUnread
    ? TextLayer.smallBoldNormal
    : TextLayer.smallRegularNormal;
  return (
    <Flex>
      <Box
        sx={styles.root}
        {...rest}
        data-testid={"Notification_card_" + id}
        cursor="pointer"
        position={"relative"}
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
      >
        <Flex pos={"relative"}>
          <Avatar src={src} name={avatarName} />
          <Box ml="1.25rem">
            <Text layerStyle={TextLayer.baseRegularNormal} color={textColor}>
              <Highlight
                query={highlightKeyword}
                styles={{
                  fontWeight: 700,
                  color: textColor,
                }}
              >
                {originalStr}
              </Highlight>
            </Text>
            <Text layerStyle={timeTextStyle} color={timeColor}>
              35 minutes ago
            </Text>
          </Box>
          {isNotificationUnread && _renderBlueDot()}
          {isMouseEnter && _render3DotMenu()}
        </Flex>
        {isShowActionButton && _renderActions()}
      </Box>
    </Flex>
  );
};

export default NotificationCardInfo;
