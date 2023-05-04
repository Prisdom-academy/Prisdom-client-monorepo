import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import * as inputTheme from './InputTheme';

const baseStyle = defineStyle({
  ...inputTheme.baseStyle?.field,
  textAlign: 'center'
});

export const pinInputTheme = defineStyleConfig({
  baseStyle
});
