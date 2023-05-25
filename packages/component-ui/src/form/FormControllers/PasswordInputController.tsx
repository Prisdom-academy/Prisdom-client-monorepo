import { InputRightElement } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import TextInput, { CustomIconRendererParams } from '../TextInput';
import { IControllerBase } from './additions/interfaces';
import { styles } from './additions/styles';
import {
  EyeIconOutlined,
  EyeSlashIconOutlined
} from '@prisdom/theme/icons/SVGs/eye';
import '../form.css';
import { useState } from 'react';

interface IPasswordControllerProps extends IControllerBase {
  onShowPasswordClick?(): void;
  onHidePasswordClick?(): void;
  onChange?(): void;
  successMsg?: string;
  /**
   * Only use if you need this controller works as a confirmed password
   */
  originalPassword?: string;
}

export const PasswordInputController = (
  props: IPasswordControllerProps
) => {
  const {
    name,
    control,
    placeholder,
    label,
    onShowPasswordClick,
    onHidePasswordClick,
    onChange,
    successMsg,
    className,
    originalPassword
  } = props;

  const [fieldType, setFieldType] = useState<'text' | 'password'>(
    'password'
  );

  function _showPasswordClick() {
    setFieldType('text');
    onShowPasswordClick?.();
  }

  function _hidePasswordClick() {
    setFieldType('password');
    onHidePasswordClick?.();
  }

  function _showPasswordIconRenderer({
    isDirty
  }: CustomIconRendererParams) {
    return isDirty ? (
      <InputRightElement
        children={
          fieldType === 'password' ? (
            <EyeIconOutlined
              sx={styles.customIcon}
              onClick={_showPasswordClick}
            />
          ) : (
            <EyeSlashIconOutlined
              sx={styles.customIcon}
              onClick={_hidePasswordClick}
            />
          )
        }
      />
    ) : null;
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const { invalid, error, isDirty } = fieldState;

        const showSuccessState =
          originalPassword === field.value &&
          isDirty &&
          !invalid &&
          !!successMsg;

        return (
          <TextInput
            label={label}
            fieldType={fieldType}
            placeholder={placeholder}
            customIconRenderer={_showPasswordIconRenderer}
            isInvalid={invalid}
            errorMsg={error?.message}
            isSuccess={showSuccessState}
            successMsg={successMsg}
            onChange={onChange}
            className={className}
            {...field}
            {...fieldState}
          />
        );
      }}
    />
  );
};
