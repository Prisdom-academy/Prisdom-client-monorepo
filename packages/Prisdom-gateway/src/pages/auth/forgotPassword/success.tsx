/* eslint-disable react-hooks/exhaustive-deps */
import PrisdomHead from '@/components/PrisdomHead';
import Footer from '@/components/layout/Footer';
import { NextSafeContainer } from '@/components/layout/SafeContainer';
import { Box, Center, Flex, Img, Text } from '@chakra-ui/react';
import successImg from '@/images/reset-success.png';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import { TypoToken } from '@prisdom/theme/base/interfaces';
import TextDivider from '@/components/TextDivider';
import PrisButton from '@prisdom/component-ui/buttons/PrisButton';
import { useRouter } from 'next/router';
import { useGetStore } from '@/store/StoreProvider';
import { useRedirectWithourEmail } from '../../../hooks/useRedirectWithoutEmail';
import { useAutoRedirect } from '../../../hooks/useAutoRedirect';

const Success = () => {
  let time = 20;
  const router = useRouter();
  const { authStore } = useGetStore();
  useRedirectWithourEmail('/auth/signin');
  const { autoMoveTime } = useAutoRedirect(_returnSignin, time);

  function _returnSignin() {
    router.push('/auth/signin');
    authStore.removeCurrentEmail();
  }
  return (
    <>
      <PrisdomHead title="Successfully changed password" />
      <Box>
        <NextSafeContainer>
          <Center
            alignItems={'center'}
            flexDir={'column'}
            w="28rem"
            m="auto"
            minH="calc(100vh - 13.6rem)"
          >
            <Img src={successImg.src} width={'27rem'} />
            <Flex flexDir={'column'} alignItems={'center'}>
              <Text
                as="h2"
                layerStyle={TextLayer.largeBold3X}
                color={TypoToken.type_neutral_medium}
              >
                Reset password successfully
              </Text>
              <Text
                layerStyle={TextLayer.baseRegularNormal}
                color={TypoToken.type_neutral_light}
              >
                You will be taken to the homepage automatically in{' '}
                {autoMoveTime}s
              </Text>
            </Flex>
            <TextDivider title="Or" my="8" />
            <PrisButton w="100%" h="3rem" onClick={_returnSignin}>
              Sign in now
            </PrisButton>
          </Center>
        </NextSafeContainer>
        <Footer mt="auto" />
      </Box>
    </>
  );
};

export default Success;
