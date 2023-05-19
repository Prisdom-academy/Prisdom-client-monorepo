import { evaluatePasswordSecurity } from '@prisdom/component-ui/form/PasswordEvaluator/utils';
import * as Yup from 'yup';

Yup.addMethod(
  Yup.string,
  'passwordStrong',
  function (message: string) {
    return this.test(function (val = '') {
      const score = evaluatePasswordSecurity(val);
      const { createError, path } = this;

      if (score >= 3) {
        return true;
      } else {
        return createError({ path, message });
      }
    });
  }
);
