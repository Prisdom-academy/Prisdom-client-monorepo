import yup, { Maybe, AnyObject } from 'yup';

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    passwordStrong(message: string): StringSchema<TType, TContext>;
  }
}
