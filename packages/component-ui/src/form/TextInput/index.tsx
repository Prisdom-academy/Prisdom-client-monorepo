/* eslint-disable no-undef */
import {
  Input,
  InputGroup,
  Box,
  Text,
  InputRightElement,
  defineStyle,
  forwardRef,
  InputProps
} from '@chakra-ui/react';
import { Label } from '../Label';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import { ColorToken } from '@prisdom/theme/base/interfaces';
import {
  FormStatusAttention,
  FormStatusSuccess
} from '@prisdom/theme/icons/SVGs/formStatus';
import { ControllerFieldProps } from '../FormControllers/additions/interfaces';

export interface CustomIconRendererParams {
  fieldType: 'text' | 'password';
  isDirty: boolean;
  isTouched: boolean;
  invalid: boolean;
}

export interface ITextInputProps extends InputProps {
  formName?: string;
  isInvalid?: boolean;
  isSuccess?: boolean;
  placeholder?: string;
  errorMsg?: string;
  successMsg?: string;
  fieldType?: 'text' | 'password';
  label: string;
  className?: string;

  customIconRenderer?(
    params: CustomIconRendererParams
  ): JSX.Element | null;
}

const TextInput = forwardRef(function TextInput(
  props: ITextInputProps & ControllerFieldProps,
  ref
) {
  const {
    label,
    formName = label,
    placeholder,
    errorMsg,
    isInvalid = false,
    isSuccess = false,
    successMsg,
    fieldType = 'text',
    customIconRenderer,
    isDirty = false,
    invalid = false,
    onChange,
    isTouched = false,
    className,
    ...rest
  } = props;

  const iconStyle = defineStyle({
    boxSize: '5',
    mt: '2px'
  });
  const shouldRenderCustomIcon =
    !isSuccess && !isInvalid && customIconRenderer;

  function _renderMessages() {
    return (
      <>
        {isInvalid && errorMsg && (
          <Text
            mt="2"
            layerStyle={TextLayer.smallRegularNormal2X}
            color={ColorToken.error_base}
          >
            {errorMsg}
          </Text>
        )}
        {isSuccess && successMsg && (
          <Text
            mt="2"
            layerStyle={TextLayer.smallRegularNormal2X}
            color={ColorToken.success_base}
          >
            {successMsg}
          </Text>
        )}
      </>
    );
  }

  return (
    <Box id={`FORM-${formName}`} mb="6" className={className}>
      <Label>{label}</Label>
      <InputGroup>
        <Input
          type={fieldType}
          placeholder={placeholder}
          h="2.75rem"
          w="100%"
          isInvalid={isInvalid}
          data-success={isSuccess}
          onChange={onChange}
          ref={ref}
          {...rest}
        />
        {(isInvalid || isSuccess) && (
          <InputRightElement
            children={
              isInvalid ? (
                <FormStatusAttention
                  sx={iconStyle}
                  fill={ColorToken.error_base}
                />
              ) : (
                <FormStatusSuccess
                  sx={iconStyle}
                  fill={ColorToken.success_base}
                />
              )
            }
          />
        )}
        {shouldRenderCustomIcon &&
          customIconRenderer({
            fieldType,
            isDirty,
            invalid,
            isTouched
          })}
      </InputGroup>
      {_renderMessages()}
    </Box>
  );
});

export default TextInput;
