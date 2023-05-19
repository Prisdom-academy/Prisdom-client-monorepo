export const PW_MIN_LENGTH = 8;

export function lengthCheck(str: string) {
  return str.length >= PW_MIN_LENGTH;
}

export function numberCheck(str: string) {
  const pattern = /\d{1,}/;

  return pattern.test(str);
}

export function lowerCharacterCheck(str: string) {
  const pattern = /[a-z]{1,}/;

  return pattern.test(str);
}

export function upperCharacterCheck(str: string) {
  const pattern = /[A-Z]{1,}/;

  return pattern.test(str);
}

export function specialSymbolCheck(str: string) {
  const pattern = /[!@#$%^&*()~_+|]{1,}/;

  return pattern.test(str);
}

/**
 * Maximum is 5 points => strongest password
 * @param password string
 * @returns number from 0 -> 5
 */
export function evaluatePasswordSecurity(password: string) {
  let score = 0;
  let checkListFns = [
    lengthCheck,
    lowerCharacterCheck,
    upperCharacterCheck,
    numberCheck,
    specialSymbolCheck
  ];

  checkListFns.forEach((checkFn) => {
    if (checkFn(password)) {
      score += 1;
    }
  });

  return score;
}
