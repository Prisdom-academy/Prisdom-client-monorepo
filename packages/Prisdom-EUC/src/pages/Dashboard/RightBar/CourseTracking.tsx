import { Center, CenterProps, Text } from '@chakra-ui/react';
import { TextLayer } from 'theme/typography/interfaces';
import { stylesComputed } from './styles';
import { ProgressBar } from './ProgressBar';

interface ICourseTracking extends CenterProps {
  bgColor: string;
  bigTitleColor: string;
  subTitleColor: string;
  bigTitle: string;
  subTitle: string;
  percent: number;
}

export const CourseTracking = (props: ICourseTracking) => {
  const styles = stylesComputed();
  const {
    bgColor,
    bigTitleColor,
    subTitleColor,
    bigTitle,
    subTitle,
    percent,
    ...rest
  } = props;

  return (
    <Center
      sx={styles.courseTracking}
      bgColor={bgColor}
      data-testid="course-tracking"
      {...rest}
    >
      <Text
        mt=".5rem"
        as="h2"
        color={bigTitleColor}
        layerStyle={TextLayer.largeBold3X}
      >
        {bigTitle}
      </Text>
      <Text
        w="7rem"
        textAlign={'center'}
        color={subTitleColor}
        layerStyle={TextLayer.baseRegularNormal}
      >
        {subTitle}
      </Text>

      <ProgressBar
        mt={2}
        value={percent}
        trackColor={bgColor}
        progressColor={bigTitleColor}
      />
    </Center>
  );
};
