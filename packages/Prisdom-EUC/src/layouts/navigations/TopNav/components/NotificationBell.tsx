import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import PrisButton from 'component-ui/buttons/PrisButton';
import { dataNotifications } from 'data-test/dataNotification';
import { Fragment } from 'react';
import { NavTokenColor } from 'theme/base/aliasTokens/interfaces';
import { NotificationIconFilled } from 'theme/icons/SVGs/notification';
import { TextLayer } from 'theme/typography/interfaces';
import NotificationPanel from './NotificationPanel';
import { styles } from './styles';

interface INotificationBellProps {
  notificationCount: number;
  onClick?(): void;
}

const NotificationBell = (props: INotificationBellProps) => {
  const { notificationCount, onClick } = props;
  const { isOpen, onToggle, onClose } = useDisclosure();

  let noticCountStyles = styles.noticCount;

  if (notificationCount > 9) {
    noticCountStyles = {
      ...noticCountStyles,
      w: '1.9rem',
      right: '-16px'
    };
  }

  const _renderPanel = () => {
    return (
      <NotificationPanel
        isShow={isOpen}
        onClickOutside={onClose}
        notifications={dataNotifications}
      />
    );
  };

  const _onBellClick = () => {
    onToggle();
    onClick?.();
  };

  return (
    <Fragment>
      <Box position={'relative'}>
        <PrisButton
          variant="tertiary"
          data-testid="NotificationBellBox"
          sx={styles.notificationBellBox}
          onClick={_onBellClick}
        >
          <NotificationIconFilled
            w="1.25rem"
            h="1.25rem"
            fill={NavTokenColor.cpn_btn_neutral_content_default}
          />
          {notificationCount > 0 && (
            <Flex sx={noticCountStyles}>
              <Text layerStyle={TextLayer.smallBoldNormalX}>
                {notificationCount}
              </Text>
            </Flex>
          )}
        </PrisButton>
      </Box>
      {_renderPanel()}
    </Fragment>
  );
};

export default NotificationBell;
