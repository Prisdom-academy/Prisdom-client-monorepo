import { Box, BoxProps } from '@chakra-ui/react';
import { stylesComputed } from './styles';
import { ColorToken } from 'theme/base/interfaces';

interface IProgressBar extends BoxProps {
  trackColor?: string;
  progressColor?: string;
  value: number;
}

export const ProgressBar = (props: IProgressBar) => {
  const {
    trackColor = ColorToken.global_success_transparent_16,
    progressColor = ColorToken.success_base,
    value,
    ...rest
  } = props;
  const styles = stylesComputed();

  return (
    <Box
      sx={styles.progressBar}
      {...rest}
      bgColor={trackColor}
      _after={{
        ...styles.progressBarAfter,
        bgColor: progressColor,
        w: `${value}%`
      }}
    ></Box>
  );
};
