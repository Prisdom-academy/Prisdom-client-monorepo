import { CSSObject } from '@emotion/react';
import { FontFamily } from 'theme/base/interfaces';

/**
 * @param fontSize px
 * @param fontWeight number 100/200/.../900
 * @param lineHeight px
 * @return CSS Object with rem
 */
function generateHeadingStyle(
  fontSize: number,
  fontWeight: number,
  lineHeight: number,
  letter = 0
): CSSObject {
  return {
    fontFamily: FontFamily.title,
    color: 'gray.900',
    fontSize: (fontSize / 16).toFixed(1) + 'rem',
    fontWeight,
    lineHeight: (lineHeight / 16).toFixed(1) + 'rem',
    letterSpacing: !letter ? 'normal' : letter / 100 + 'rem'
  };
}

function generateContentStyle(
  fontSize: number,
  fontWeight: number,
  lineHeight: number,
  letter = 0
): CSSObject {
  return {
    color: 'gray.900',
    fontSize: (fontSize / 16).toFixed(1) + 'rem',
    fontWeight,
    lineHeight: (lineHeight / 16).toFixed(1) + 'rem',
    letterSpacing: !letter ? 'normal' : letter / 100 + 'rem'
  };
}

const large = {
  largeBold5X: generateHeadingStyle(72, 700, 100),
  largeMedium5X: generateHeadingStyle(72, 600, 100),
  largeRegular5X: generateHeadingStyle(72, 500, 100),

  largeBold4X: generateHeadingStyle(48, 700, 68, 1),
  largeMedium4X: generateHeadingStyle(48, 600, 68, 1),
  largeRegular4X: generateHeadingStyle(48, 500, 68, 1),

  largeBold3X: generateHeadingStyle(32, 700, 44),
  largeMedium3X: generateHeadingStyle(32, 600, 44),
  largeRegular3X: generateHeadingStyle(32, 500, 44),

  largeBold2X: generateHeadingStyle(28, 700, 40),
  largeMedium2X: generateHeadingStyle(28, 600, 40),
  largeRegular2X: generateHeadingStyle(28, 500, 40),

  largeBoldX: generateHeadingStyle(24, 700, 32),
  largeMediumX: generateHeadingStyle(24, 600, 32),
  largeRegularX: generateHeadingStyle(24, 500, 32),

  largeBold: generateHeadingStyle(20, 600, 28),
  largeRegular: generateHeadingStyle(20, 400, 28)
};

const medium = {
  mediumBold: generateContentStyle(18, 600, 24),
  regularBold: generateContentStyle(18, 400, 24),
  baseBoldNormal: generateContentStyle(16, 600, 24, 1.5),
  baseRegularNormal: generateContentStyle(16, 400, 24, 1.5),
  baseLightNormal: generateContentStyle(16, 300, 24, 1.5),

  smallBoldNormal: generateContentStyle(14, 600, 24, 1),
  smallRegularNormal: generateContentStyle(14, 400, 24, 1),
  smallLightNormal: generateContentStyle(14, 300, 24, 1)
};

const smallX = {
  smallBoldNormalX: generateContentStyle(12, 600, 20, 4),
  smallRegularNormalX: generateContentStyle(12, 400, 20, 4),
  smallLightNormalX: generateContentStyle(12, 300, 20, 4)
};

const small2X = {
  smallBoldNormal2X: generateContentStyle(11, 600, 20, 4),
  smallRegularNormal2X: generateContentStyle(11, 400, 20, 4),
  smallLightNormal2X: generateContentStyle(11, 300, 20, 4)
};

export const textLayerStyle = {
  ...large,
  ...medium,
  ...smallX,
  ...small2X
};
