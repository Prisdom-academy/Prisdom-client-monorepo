import {
  HStack,
  PinInputField,
  forwardRef,
  PinInput,
  Text,
  Box
} from '@chakra-ui/react';
import { ColorToken } from '@prisdom/theme/base/interfaces';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import { ControllerFieldProps } from '../FormControllers/additions/interfaces';

interface IPinInputProps {
  length: number;
  errorMsg?: string;
}

const PinInputForm = forwardRef(function PinInputForm(
  props: IPinInputProps & ControllerFieldProps,
  ref
) {
  const { length, invalid, errorMsg, ...rest } = props;
  let listPinInputs: JSX.Element[] = [];
  for (let i = 0; i < length; i++) {
    listPinInputs.push(<PinInputField key={i} ref={ref} />);
  }

  return (
    <Box>
      <HStack mt="3">
        <PinInput placeholder="-" isInvalid={invalid} {...rest}>
          {listPinInputs}
        </PinInput>
      </HStack>
      {errorMsg && invalid && (
        <Text
          mt="2"
          layerStyle={TextLayer.smallRegularNormal2X}
          color={ColorToken.error_base}
        >
          {errorMsg}
        </Text>
      )}
    </Box>
  );
});

export default PinInputForm;
