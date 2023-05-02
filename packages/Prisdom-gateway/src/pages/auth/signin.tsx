/* eslint-disable react/no-children-prop */
import PrisdomHead from '@/components/PrisdomHead';
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  VStack,
  Divider,
  Checkbox
} from '@chakra-ui/react';
import background from '@/images/hero-bg.jpg';
import { NextSafeContainer } from '@/components/layout/SafeContainer';
import TextButton from '@prisdom/component-ui/buttons/TextButton';
import { ArrowLeftIconFilled } from '@prisdom/theme/icons/SVGs/arrow';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import { TypoToken } from '@prisdom/theme/base/interfaces';
import PlatformSigninButton from '@prisdom/component-ui/src/buttons/PlatformSigninButton';
import { signinStyle } from './styles/signinStyle';
import { SubmitHandler, useForm } from 'react-hook-form';
import PrisButton from '@prisdom/component-ui/buttons/PrisButton';
import { TextInputController } from '@prisdom/component-ui/form/FormControllers/TextInputController';
import { PasswordInputController } from '@prisdom/component-ui/form/FormControllers/PasswordInputController';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import { signinSchema } from './_validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';

interface IFormInput {
  email: string;
  password: string;
}

const Signin = () => {
  const { control, handleSubmit, resetField } = useForm<IFormInput>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(signinSchema)
  });
  const [passwordFieldType, setPasswordFieldType] = useState<
    'text' | 'password'
  >('password');

  const _onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  function _renderSigninForm() {
    return (
      <VStack>
        <VStack id="Signin-right" sx={signinStyle.root}>
          <VStack id="Signin-form">
            <Text layerStyle={TextLayer.largeBold3X}>
              Sign in to Prisdom
            </Text>
            <Text
              layerStyle={TextLayer.mediumRegular}
              color={TypoToken.type_neutral_light}
            >
              Enter your future
            </Text>
          </VStack>
          <Flex mt="2rem !important">
            <PlatformSigninButton mr={3} variant="outlined" />
            <PlatformSigninButton
              platform="github"
              variant="outlined"
            />
          </Flex>
          <Text
            layerStyle={TextLayer.smallRegularNormalX}
            color={TypoToken.type_neutral_light}
            mt="4 !important"
          >
            We won&apos; share your information without permission
          </Text>
          <Flex w="100%" alignItems={'center'} my="4 !important">
            <Divider />
            <Text
              mx="3"
              layerStyle={TextLayer.smallRegularNormal}
              color={TypoToken.type_neutral_light}
            >
              Or
            </Text>
            <Divider />
          </Flex>
          <Box w="100%">
            <form onSubmit={handleSubmit(_onSubmit)}>
              <TextInputController
                control={control}
                name={'email'}
                label={'Email'}
                onCustomIconClick={() => resetField('email')}
                placeholder="your-email@example.com"
              />

              <PasswordInputController
                control={control}
                onHidePasswordClick={() =>
                  setPasswordFieldType('password')
                }
                onShowPasswordClick={() =>
                  setPasswordFieldType('text')
                }
                name="password"
                label="Password"
                fieldType={passwordFieldType}
                placeholder="yourPassword@1234"
              />

              <Flex
                align="center"
                justify={'space-between'}
                mb="4rem !important"
              >
                <Checkbox>
                  <Text
                    layerStyle={TextLayer.smallRegularNormal}
                    color="inherit"
                  >
                    Save your password
                  </Text>
                </Checkbox>
                <Link href={'#'}>
                  <TextButton>Forgot password?</TextButton>
                </Link>
              </Flex>
              <PrisButton type="submit" w={'100%'} size="lg">
                Sign in
              </PrisButton>
            </form>
          </Box>
        </VStack>
        <Flex align="center">
          <Text
            layerStyle={TextLayer.smallBoldNormal}
            color={TypoToken.type_neutral_default}
            as="span"
          >
            Don&apos;t have account?
          </Text>
          <Link href={'#'}>
            <TextButton>Create an account!</TextButton>
          </Link>
        </Flex>
        <Footer mt="10 !important" />
      </VStack>
    );
  }

  return (
    <>
      <PrisdomHead title="Prisdom - Signin" />
      <Box
        sx={signinStyle.backgroundBox}
        bgImage={background.src}
        id="SigninPage"
      >
        <NextSafeContainer>
          <Box mt="8">
            <TextButton variant={'secondary'}>
              <ArrowLeftIconFilled
                boxSize="5"
                fill="inherit"
                mr="2"
              />
              Turn back
            </TextButton>
          </Box>
          <SimpleGrid
            mt={{ base: '2rem', md: '3rem', xl: '4rem' }}
            columns={2}
            spacing={'2rem'}
          >
            <Box id="Signin-left" mt="12">
              <Text layerStyle={TextLayer.largeMedium5X} w="82%">
                Welcome to the new world!
              </Text>
              <Text
                layerStyle={TextLayer.largeRegular}
                color={TypoToken.type_neutral_light}
                w="90%"
                mt="1rem"
              >
                Lorem ipsum dolor sit amet consectetur. Rhoncus
                consectetur fermentum dui sapien lorem nisl semper
                amet consequat.
              </Text>
            </Box>
            {_renderSigninForm()}
          </SimpleGrid>
        </NextSafeContainer>
      </Box>
    </>
  );
};

export default Signin;
