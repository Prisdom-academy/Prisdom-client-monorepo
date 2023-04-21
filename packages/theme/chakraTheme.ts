import { extendTheme } from '@chakra-ui/react';
import { globalColor } from './colors/baseColor';
import { globalStyle } from './base/globalStyle';
import { semanticTokens } from './base/semanticToken';
import { textLayerStyle } from './typography/textLayerStyle';
import { ButtonTheme } from './components/ButtonTheme';
import { TooltipTheme } from './components/TooltipTheme';
import { TextTheme } from './components/TextTheme';
import { breakpoints } from './base/breakPoints';
import { dividerTheme } from './components/DividerTheme';
import { radioTheme } from './components/RadioTheme';
import { MenuTheme } from './components/MenuTheme';
import { CheckboxStyles } from './components/CheckboxTheme';
import { PrisButtonStyle } from '@prisdom/component-ui/src/buttons/PrisButton/styles';
import { PrisButtonSecStyle } from '@prisdom/component-ui/src/buttons/PrisButtonSec/styles';
import { TextButtonStyle } from '@prisdom/component-ui/src/buttons/TextButton/styles';

export const chakraTheme = extendTheme({
  config: {
    initialColorMode: 'dark'
  },
  breakpoints: breakpoints,
  semanticTokens: semanticTokens,
  styles: {
    global: globalStyle
  },
  colors: globalColor,
  layerStyles: {
    ...textLayerStyle
  },
  components: {
    Button: ButtonTheme,
    Tooltip: TooltipTheme,
    Text: TextTheme,
    Divider: dividerTheme,

    PrisButton: PrisButtonStyle,
    PrisButtonSec: PrisButtonSecStyle,
    TextButton: TextButtonStyle,

    Checkbox: CheckboxStyles,
    Radio: radioTheme,
    Menu: MenuTheme
  }
});
