import { Control } from 'react-hook-form/dist/types';

export interface IControllerBase {
  control: Control<any, any>;
  name: string;
  label: string;
  placeholder?: string;
  errorMsg?: string;
}
