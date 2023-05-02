import { InputRightElement } from '@chakra-ui/react';
import CloseIcon from '@prisdom/theme/icons/SVGs/close';
import { Controller } from 'react-hook-form';
import TextInput, { CustomIconRendererParams } from '../TextInput';
import { IControllerBase } from './interfaces';
import { styles } from './styles';

interface ITextInputController extends IControllerBase {
  onCustomIconClick(): void;
}

export const TextInputController = (props: ITextInputController) => {
  const { name, control, placeholder, label, onCustomIconClick } =
    props;

  function _clearEmailIconRenderer({
    isDirty
  }: CustomIconRendererParams) {
    return isDirty ? (
      <InputRightElement
        children={
          <CloseIcon
            sx={styles.customIcon}
            onClick={onCustomIconClick}
          />
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
          placeholder={placeholder}
          customIconRenderer={_clearEmailIconRenderer}
          errorMsg={fieldState.error?.message}
          isInvalid={fieldState.invalid}
          {...field}
          {...fieldState}
        />
      )}
    />
  );
};
