import { ComponentStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { ExtendedColor } from '../colors/interfaces';

export const TextTheme: ComponentStyleConfig = {
  baseStyle: (props) => ({
    textAlign: 'left',
    margin: 0,
    color: mode(
      ExtendedColor['darkLevel.900'],
      ExtendedColor['darkLevel.100']
    )(props)
  })
};
