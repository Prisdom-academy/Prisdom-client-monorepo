import { Controller } from 'react-hook-form';
import { IControllerBase } from './additions/interfaces';
import PinInputForm from '../PinInput';

interface IPinControllerProps extends IControllerBase {
  length: number;
}

export const PinInputController = (props: IPinControllerProps) => {
  const { control, name, length, label } = props;
  return (
    <Controller
      control={control}
      name={name}
      data-testid={label}
      render={({ field, fieldState }) => (
        <PinInputForm
          length={length}
          errorMsg={fieldState.error?.message}
          {...field}
          {...fieldState}
        />
      )}
    />
  );
};
