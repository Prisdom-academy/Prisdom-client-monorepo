import { Box, Divider, Flex, Text, VStack } from '@chakra-ui/react';
import CollapsibleNavigation from '@prisdom/component-ui/src/CollapsibleNavigation';
import CollapsibleNavItem from '@prisdom/component-ui/src/CollapsibleNavigation/CollapsibleNavItem';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import { style } from './styles';
import { navList } from './navList';
import { useLocation } from 'react-router-dom';
import BadgeInfo from '@prisdom/component-ui/src/Badges/BadgeInfor';
import { config } from 'config/config.dev';
import {
  ColorToken,
  TypoToken
} from '@prisdom/theme/base/interfaces';
import TextButton from '@prisdom/component-ui/src/buttons/TextButton';

interface ILeftNavProps {
  isLeftNavExpand: boolean;
  isFixed: boolean;
  onMouseEnter(): void;
  onMouseOut(): void;
}

const LeftNav = (props: ILeftNavProps) => {
  const { isLeftNavExpand, onMouseEnter, onMouseOut, isFixed } =
    props;
  const styles = style(isLeftNavExpand, isFixed);
  const currentRoutePath = useLocation().pathname;

  function _renderNavList() {
    return (
      <Box w="100%" px="1rem">
        {navList.map((item) => {
          const { subItems, ...rest } = item;
          const listSubItems = subItems.map((subItem) => {
            const { title, linkHref } = subItem;
            return (
              <CollapsibleNavItem
                id={title}
                key={title}
                linkHref={linkHref}
                isActive={currentRoutePath === linkHref}
              >
                {title}
              </CollapsibleNavItem>
            );
          });
          return (
            <CollapsibleNavigation
              key={rest.title}
              {...rest}
              mt=".6rem"
              isMinimize={!isLeftNavExpand && !isFixed}
            >
              {listSubItems}
            </CollapsibleNavigation>
          );
        })}
      </Box>
    );
  }

  function _renderNavInfo() {
    return (
      <Box
        w="100%"
        mt="auto !important"
        px=".5rem"
        className="slideInAnimationDelay"
      >
        <Flex>
          <Text
            layerStyle={TextLayer.smallRegularNormal}
            color={TypoToken.type_neutral_disable}
            mr="1rem"
          >
            Version
          </Text>
          <BadgeInfo
            bgColor={ColorToken.warning_light}
            color={ColorToken.warning_darker}
            badgeType="round"
          >
            Insider {config.version}
          </BadgeInfo>
        </Flex>
        <Divider variant={'v1'} my="1rem" />
        <Flex flexWrap={'wrap'} alignItems="center" opacity={0.7}>
          <TextButton variant={'secondary'}>Điều khoản</TextButton>
          <Text mx=".5rem">&#x2022;</Text>
          <TextButton variant={'secondary'}>
            Quyền riêng tư
          </TextButton>
          <TextButton variant={'secondary'}>
            Liên hệ với chúng tôi
          </TextButton>
        </Flex>
        <Text
          my="1.25rem"
          ml="7px"
          m="1.25rem 0 1.25rem 7px"
          layerStyle={TextLayer.smallRegularNormal2X}
          color={TypoToken.type_neutral_light}
        >
          © 2023 Prisdom Copyright
        </Text>
      </Box>
    );
  }

  return (
    <VStack
      sx={styles.root}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseOut}
    >
      <Box px="1rem">
        <Text
          sx={styles.menuTitle}
          layerStyle={TextLayer.smallBoldNormal}
        >
          Menu
        </Text>
      </Box>
      {_renderNavList()}
      {(isLeftNavExpand || isFixed) && _renderNavInfo()}
    </VStack>
  );
};

export default LeftNav;
