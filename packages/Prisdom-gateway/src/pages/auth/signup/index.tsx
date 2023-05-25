import PrisdomHead from '@/components/PrisdomHead';
import TurnbackButton from '@/components/TurnbackButton';
import { NextSafeContainer } from '@/components/layout/SafeContainer';
import {
  Box,
  Center,
  Checkbox,
  Flex,
  Text,
  chakra
} from '@chakra-ui/react';
import { commonAuthStyles } from '../styles/auth';
import Footer from '@/components/layout/Footer';
import FlexRoleNav, { SignUpRole } from '@/components/FlexRoleNav';
import { TextInputController } from '@prisdom/component-ui/form/FormControllers/TextInputController';
import { useForm } from 'react-hook-form';
import {
  ColorToken,
  TypoToken
} from '@prisdom/theme/base/interfaces';
import { PasswordInputController } from '@prisdom/component-ui/form/FormControllers/PasswordInputController';
import PasswordEvaluator from '@prisdom/component-ui/form/PasswordEvaluator';
import PrisButton from '@prisdom/component-ui/buttons/PrisButton';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '../_validationSchema';
import { useRouter } from 'next/router';

type FormInput = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const { control, resetField, watch, handleSubmit } =
    useForm<FormInput>({
      defaultValues: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      resolver: yupResolver(signupSchema)
    });

  const [agree, setAgree] = useState<boolean | undefined>();
  const passwordVal = watch('password');
  function _onRoleChange(role: SignUpRole) {
    console.log(role);
  }

  const router = useRouter();
  function _onSubmit(data: FormInput) {
    console.log(data);
    router.push('/auth/signup/success');
  }

  function _renderSignupForm() {
    return (
      <chakra.form
        bgColor={ColorToken.global_dark_level_transparent_32}
        p="6"
        borderRadius={'.5rem'}
        onSubmit={handleSubmit(_onSubmit)}
      >
        <TextInputController
          control={control}
          onCustomIconClick={() => resetField('name')}
          name={'name'}
          label={'Your name'}
          placeholder="Nguyen Van A"
        />
        <TextInputController
          control={control}
          onCustomIconClick={() => resetField('email')}
          name={'email'}
          label={'Email'}
          placeholder="nguyenvanA@gmail.com"
        />
        <Flex justifyContent={'space-between'}>
          <PasswordInputController
            control={control}
            name={'password'}
            label={'Password'}
            placeholder="**********"
            className="passwordField"
          />
          <PasswordInputController
            control={control}
            name={'confirmPassword'}
            label={'Confirm password'}
            placeholder="**********"
            className="passwordField"
            successMsg="Your confirm password is the same"
            originalPassword={passwordVal}
          />
        </Flex>
        <PasswordEvaluator
          password={passwordVal}
          singleBarWidth={'5.75rem'}
        />
        <Box mt="8">
          <Checkbox
            mb="4"
            onChange={(e) => setAgree(e.target.checked)}
          >
            <Text
              layerStyle={TextLayer.smallRegularNormal}
              color={TypoToken.type_neutral_default}
            >
              I read and agress with Terms & Conditions
            </Text>
          </Checkbox>
          <PrisButton
            type="submit"
            w="100%"
            size={'lg'}
            isDisabled={!agree}
          >
            Create account
          </PrisButton>
        </Box>
      </chakra.form>
    );
  }

  return (
    <>
      <PrisdomHead title="Create new account" />
      <Box>
        <NextSafeContainer>
          <TurnbackButton />
          <Center
            flexDir={'column'}
            id="form-wrapper"
            minH="calc(100vh - 13.6rem)"
          >
            <Flex sx={commonAuthStyles.signupBox} id="Auth-box">
              <Text sx={commonAuthStyles.title}>
                Create new account
              </Text>
              <Text sx={commonAuthStyles.subTitle}>
                Let&apos;s explore the exciting things ahead together
              </Text>
              <FlexRoleNav
                onRoleChange={_onRoleChange}
                mt="6"
                mb="2"
              />
              {_renderSignupForm()}
            </Flex>
          </Center>
        </NextSafeContainer>
        <Footer mt="auto" />
      </Box>
    </>
  );
};

export default Signup;
