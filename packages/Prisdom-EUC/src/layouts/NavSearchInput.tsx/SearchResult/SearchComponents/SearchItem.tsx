import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import Dot from '@prisdom/component-ui/src/Badges/Dot';
import PrisButton from '@prisdom/component-ui/src/buttons/PrisButton';
import { TypoToken } from '@prisdom/theme/base/interfaces';
import { ExtendedColor } from '@prisdom/theme/colors/interfaces';
import { ArticleIconOutlined } from '@prisdom/theme/icons/SVGs/article';
import CloseIcon from '@prisdom/theme/icons/SVGs/close';
import { CourseIconOutlined } from '@prisdom/theme/icons/SVGs/course';
import { UserIconOutlined } from '@prisdom/theme/icons/SVGs/user';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import { styles } from '../styles';

export enum SearchItemType {
  RECENT = 'RECENT',
  COURSE = 'COURSE',
  PEOPLE = 'PEOPLE',
  ARTICLE = 'ARTICLE'
}

export interface ISearchItemProps {
  imgUrl?: string;
  type?: SearchItemType;
  title: string;
  timeByMinutes: number;
}

const SearchItem = (props: ISearchItemProps) => {
  const {
    imgUrl,
    type = SearchItemType.RECENT,
    title,
    timeByMinutes
  } = props;

  const _renderThumbnail = () => {
    if (imgUrl) {
      return (
        <Image
          src={imgUrl}
          boxSize="3rem"
          borderRadius={'.4rem'}
          objectFit="cover"
        />
      );
    } else {
      let thumbnailIcon: JSX.Element | null = null;
      const defaultProps = {
        boxSize: '2rem',
        fill: ExtendedColor['darkLevel.400']
      };

      switch (type) {
        case SearchItemType.ARTICLE:
          thumbnailIcon = <ArticleIconOutlined {...defaultProps} />;
          break;
        case SearchItemType.COURSE:
          thumbnailIcon = <CourseIconOutlined {...defaultProps} />;
          break;
        case SearchItemType.PEOPLE:
          thumbnailIcon = <UserIconOutlined {...defaultProps} />;
          break;
      }

      return thumbnailIcon;
    }
  };

  return (
    <Flex sx={styles.searchItemBox}>
      <Center
        boxSize={'3rem'}
        bg={ExtendedColor['darkLevel.700']}
        borderRadius=".4rem"
      >
        {_renderThumbnail()}
      </Center>
      <Box ml={'0.75rem'} mr="auto">
        <Text
          color={TypoToken.type_neutral_default}
          layerStyle={TextLayer.baseRegularNormal}
        >
          {title}
        </Text>
        <Flex alignItems={'center'}>
          <Dot />
          <Text
            color={TypoToken.type_neutral_disable}
            layerStyle={TextLayer.smallRegularNormal}
            ml="5px"
          >
            {timeByMinutes} mins
          </Text>
        </Flex>
      </Box>
      <PrisButton
        variant={'tertiary'}
        boxSize="2.25rem"
        borderRadius={'50%'}
        minWidth="0"
      >
        <CloseIcon fill={'currentcolor'} boxSize="1.25rem" />
      </PrisButton>
    </Flex>
  );
};

export default SearchItem;
