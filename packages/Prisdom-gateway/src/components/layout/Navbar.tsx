/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import { styles } from './styles';
import Image from 'next/image';
import logo from '@prisdom/theme/icons/Images/LogoNav.png';
import NavSearchInput from '@prisdom/component-ui/src/NavSearchInput';
import {
  myCoursesData,
  recentItemData
} from '@/fake-data/dataSearch';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import { TypoToken } from '@prisdom/theme/base/interfaces';
import Link from 'next/link';
import TextButton from '@prisdom/component-ui/buttons/TextButton';
import PrisButton from '@prisdom/component-ui/buttons/PrisButton';
import { useGetStore } from '@/store/StoreProvider';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useRedirectToApp } from '@/hooks/useRedirectWithoutEmail';

interface NavbarProps {
  currentLocaltion: string;
}

const NavBar = (props: NavbarProps) => {
  const { authStore } = useGetStore();
  useEffect(() => {
    authStore.autoLogin();
  }, []);
  const { uri } = useRedirectToApp(
    authStore.authToken,
    authStore.remainingExpTime
  );
  const { currentLocaltion } = props;
  const navLinkItems = [
    {
      title: 'About',
      to: '/about'
    },
    {
      title: 'Features',
      to: '/features'
    },
    {
      title: 'Articles',
      to: '/articles'
    },
    {
      title: 'Pricing',
      to: '/pricing'
    }
  ];
  const _isOnSigninPage = currentLocaltion === '/auth/signin';
  const _isOnSignupPage = currentLocaltion === '/auth/signup';

  function _renderNavItem(item: { title: string; to: string }) {
    return (
      <Box key={item.title} mr="5">
        <Link href={item.to} className="navItem">
          <Text
            as="h5"
            layerStyle={TextLayer.smallBoldNormal}
            color={TypoToken.type_link_default}
            data-active={currentLocaltion === item.to}
          >
            {item.title}
          </Text>
        </Link>
      </Box>
    );
  }

  function _minWidthSearchComputed() {
    if (!/auth\/(signin|signup)/.test(currentLocaltion)) {
      return 'min(35rem, calc(100vw - 65rem))';
    }
  }

  return (
    <Flex sx={styles.root} as={'nav'} id="NavBar">
      <Image src={logo} alt={'Logo'} className="logoImage"></Image>
      <Box
        position={'absolute'}
        left={'49%'}
        top="4"
        transform={'translateX(-50%)'}
      >
        <NavSearchInput
          recentData={recentItemData}
          courseData={myCoursesData}
          minWComputed={_minWidthSearchComputed()}
        />
      </Box>
      <Flex alignItems={'center'}>
        <Flex>
          {navLinkItems.map((item) => _renderNavItem(item))}
        </Flex>
        <Divider variant={'v2'} h="1rem" orientation="vertical" />
        <Flex>
          {!authStore.isAuth ? (
            <Flex>
              {!(_isOnSigninPage || _isOnSignupPage) && (
                <TextButton variant={'secondary'} ml="3">
                  <Link href="/auth/signin">Sign in</Link>
                </TextButton>
              )}
              <PrisButton ml="3">
                <Link
                  href={
                    !_isOnSignupPage ? '/auth/signup' : '/auth/signin'
                  }
                >
                  {!_isOnSignupPage ? 'Sign Up' : 'Sign in'}
                </Link>
              </PrisButton>
            </Flex>
          ) : (
            <Flex>
              <TextButton variant={'secondary'} ml="3">
                <Link href="/#">Upgrade</Link>
              </TextButton>
              <PrisButton ml="3">
                <Link href={uri}>Go to app</Link>
              </PrisButton>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default observer(NavBar);
