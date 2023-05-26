import PrisdomHead from '@/components/PrisdomHead';
import { NextSafeContainer } from '@/components/layout/SafeContainer';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { commonAuthStyles } from '../../../styles/auth/auth';
import TurnbackButton from '@/components/TurnbackButton';
import Footer from '@/components/layout/Footer';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import TextButton from '@prisdom/component-ui/buttons/TextButton';
import { RotateLeftIcon } from '@prisdom/theme/icons/SVGs/rotate';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { TypoToken } from '@prisdom/theme/base/interfaces';
import { config } from '@/config';
import PrisButton from '@prisdom/component-ui/buttons/PrisButton';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { pinValidationSchema } from '../../../validations/_validationSchema';
import { PinInputController } from '@prisdom/component-ui/form/FormControllers/PinInputController';
import { useRedirectWithourEmail } from '../../../hooks/useRedirectWithoutEmail';

interface IFormInput {
  pin: string;
}

const TIME_TO_RESEND = config.TIME_TO_SEND || 20;
const VerifyPin = () => {
  const router = useRouter();
  const { email } = useRedirectWithourEmail();
  const [timeRemainingState, setTimeRemainingState] =
    useState(TIME_TO_RESEND);

  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: { pin: '' },
    resolver: yupResolver(pinValidationSchema)
  });

  const _onSubmit = (data: IFormInput) => {
    console.log('DTA', data);
    router.push('./resetPassword');
  };

  let remainingSeconds = TIME_TO_RESEND;
  let timer: NodeJS.Timer;

  useEffect(() => {
    if (timeRemainingState === TIME_TO_RESEND && !timer) {
      _countingTime();
    }
  }, [timeRemainingState]);

  function _countingTime() {
    timer = setInterval(() => {
      if (remainingSeconds === 0) {
        clearInterval(timer);
        return;
      }
      remainingSeconds -= 1;
      setTimeRemainingState(remainingSeconds);
    }, 1000);
  }

  function _onClickResend() {
    setTimeRemainingState(TIME_TO_RESEND);
  }

  function _renderResendGroup() {
    return timeRemainingState === 0 ? (
      <TextButton onClick={_onClickResend}>
        Resend code
        <RotateLeftIcon boxSize="5" fill="inherit" ml="1" />
      </TextButton>
    ) : (
      <Text
        layerStyle={TextLayer.smallRegularNormal}
        color={TypoToken.type_neutral_light}
      >
        Resend code in:{' '}
        <Text
          layerStyle={TextLayer.smallBoldNormal}
          color={'inherit'}
          as="span"
        >
          {timeRemainingState}s
        </Text>
      </Text>
    );
  }

  return (
    <>
      <PrisdomHead title="Verify pin" />
      <Box pt="4">
        <NextSafeContainer>
          <TurnbackButton />
          <Center
            flexDir={'column'}
            id="form-wrapper"
            minH="calc(100vh - 9.6rem)"
          >
            <Flex sx={commonAuthStyles.commonBox} id="Auth-box">
              <Text sx={commonAuthStyles.title}>
                Verify your email
              </Text>
              <Text sx={commonAuthStyles.subTitle}>
                Please check your inbox for verification code sent to{' '}
                <Text
                  layerStyle={TextLayer.baseBoldNormal}
                  as="span"
                  color="inherit"
                >
                  {email}
                </Text>
              </Text>
              <form onSubmit={handleSubmit(_onSubmit)}>
                <Flex
                  id="pin-group"
                  flexDir={'column'}
                  align={'center'}
                  mt="8"
                >
                  <Box h="1.8rem">{_renderResendGroup()}</Box>

                  <Box mt="1">
                    <PinInputController
                      control={control}
                      length={6}
                      name={'pin'}
                      label={'pin'}
                    />
                  </Box>

                  <PrisButton type="submit" w="100%" mt="3rem">
                    Reset password
                  </PrisButton>
                  <Text
                    layerStyle={TextLayer.smallRegularNormal}
                    color={TypoToken.type_neutral_default}
                    mt="1"
                  >
                    Can&apos;t find it? Please check your spam folder
                  </Text>
                </Flex>
              </form>
            </Flex>
            <Footer mt="auto" />
          </Center>
        </NextSafeContainer>
      </Box>
    </>
  );
};

export default VerifyPin;
