import { Box, chakra, Flex, Image, Text } from '@chakra-ui/react';
import Dot from 'component-ui/Badges/Dot';
import { truncate } from 'lodash';
import { TypoToken } from 'theme/base/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';
import { TextLayer } from 'theme/typography/interfaces';

export interface ICourseCardProps {
  imgUrl: string;
  title: string;
  timeByHour: number;
  className?: string;
  onClick?: () => void;
}

const RecentCourse = (props: ICourseCardProps) => {
  const { imgUrl, title, timeByHour, className, onClick } = props;
  const _onClick = () => {
    onClick && onClick();
  };

  return (
    <Flex onClick={_onClick} border="1px solid" className={className}>
      <Image
        src={imgUrl}
        boxSize="5.375rem"
        borderLeftRadius={'.5rem'}
        objectFit="cover"
      />
      <Box id="recent-course-information" m=".4rem" ml=".75rem">
        <Text
          layerStyle={TextLayer.smallBoldNormal}
          color={TypoToken.type_neutral_default}
          as="h2"
        >
          {truncate(title, { length: 30, separator: /\s/ })}
        </Text>
        <Flex alignItems={'center'} mt=".3rem">
          <Dot />
          <Text
            layerStyle={TextLayer.smallRegularNormalX}
            color={TypoToken.type_neutral_disable}
            ml="6px"
          >
            Seen{' '}
            <chakra.b color={ExtendedColor['darkLevel.100']}>
              {timeByHour}h
            </chakra.b>{' '}
            ago
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default RecentCourse;
