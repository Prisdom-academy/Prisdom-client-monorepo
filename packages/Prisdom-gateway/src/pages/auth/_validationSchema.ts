import * as yup from 'yup';

export const signinSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required')
});

export const sendEmailSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required')
});

export const pinValidationSchema = yup.object({
  pin: yup
    .string()
    .length(6, 'All fields should be filled')
    .required('Activation code is required')
});
