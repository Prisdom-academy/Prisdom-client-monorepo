import { InputRightElement } from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import TextInput, { CustomIconRendererParams } from '../TextInput';
import { IControllerBase } from './additions/interfaces';
import { styles } from './additions/styles';
import {
  EyeIconOutlined,
  EyeSlashIconOutlined
} from '@prisdom/theme/icons/SVGs/eye';

interface IPasswordControllerProps extends IControllerBase {
  fieldType: 'text' | 'password';
  onShowPasswordClick(): void;
  onHidePasswordClick(): void;
}

export const PasswordInputController = (
  props: IPasswordControllerProps
) => {
  const {
    name,
    control,
    placeholder,
    label,
    fieldType,
    onShowPasswordClick,
    onHidePasswordClick
  } = props;

  function _showPasswordIconRenderer({
    isDirty
  }: CustomIconRendererParams) {
    return isDirty ? (
      <InputRightElement
        children={
          fieldType === 'password' ? (
            <EyeIconOutlined
              sx={styles.customIcon}
              onClick={onShowPasswordClick}
            />
          ) : (
            <EyeSlashIconOutlined
              sx={styles.customIcon}
              onClick={onHidePasswordClick}
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
      render={({ field, fieldState }) => (
        <TextInput
          label={label}
          fieldType={fieldType}
          placeholder={placeholder}
          customIconRenderer={_showPasswordIconRenderer}
          isInvalid={fieldState.invalid}
          errorMsg={fieldState.error?.message}
          {...field}
          {...fieldState}
        />
      )}
    />
  );
};
