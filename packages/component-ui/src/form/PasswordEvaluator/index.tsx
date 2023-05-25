import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { styles } from './styles';
import {
  ColorToken,
  TypoToken
} from '@prisdom/theme/base/interfaces';
import { ExtendedColor } from '@prisdom/theme/colors/interfaces';
import { useState, useEffect, useCallback } from 'react';
import { PW_MIN_LENGTH, evaluatePasswordSecurity } from './utils';
import { TextLayer } from '@prisdom/theme/typography/interfaces';

interface EvaluatorProps {
  password: string;
  isShowHint?: boolean;
  singleBarWidth?: string | number;
}

const list = [1, 2, 3, 4];

const PasswordEvaluator = (props: EvaluatorProps) => {
  const { password, isShowHint = true, singleBarWidth } = props;
  const [evaPoint, setEvaPoint] = useState(1);

  function _computeActiveColorAndText() {
    switch (evaPoint) {
      case 2:
        return { color: ColorToken.error_base, text: 'Weak' };

      case 3:
        return { color: ColorToken.warning_base, text: 'Medium' };

      case 4:
        return { color: ColorToken.primary_base, text: 'Strong' };

      case 5:
        return { color: ColorToken.success_base, text: 'Great' };

      default:
        return { color: ColorToken.error_base, text: 'Weak' };
    }
  }

  const computePointCallback = useCallback(evaluatePasswordSecurity, [
    password
  ]);

  useEffect(() => {
    setEvaPoint(computePointCallback(password));
  }, [computePointCallback, password]);

  const activeColor = _computeActiveColorAndText().color;
  const evaText = _computeActiveColorAndText().text;
  const normalColor = ExtendedColor['darkLevel.700'];

  function _renderEvaluator() {
    return list.map((item, index) => {
      return (
        <Box
          key={item}
          sx={styles.bar}
          w={singleBarWidth}
          bgColor={index < evaPoint - 1 ? activeColor : normalColor}
        />
      );
    });
  }

  return (
    <Box>
      <Flex
        align={'center'}
        justifyContent={'space-between'}
        h="2rem"
      >
        <HStack flex="2" mr="9">
          {_renderEvaluator()}
        </HStack>
        {evaPoint >= 1 && (
          <Box>
            <Text
              layerStyle={TextLayer.smallBoldNormal}
              color={activeColor}
            >
              {evaText}
            </Text>
          </Box>
        )}
      </Flex>
      {isShowHint && (
        <Text color={TypoToken.type_neutral_default} mt={4}>
          <Text
            as="span"
            layerStyle={TextLayer.smallBoldNormal}
            color={'inherit'}
          >
            A strong password:
          </Text>{' '}
          Use at least {PW_MIN_LENGTH} characters include numbers,
          letters, and punctuation marks, avoid using the same
          password for multiple sites.
        </Text>
      )}
    </Box>
  );
};

export default PasswordEvaluator;
