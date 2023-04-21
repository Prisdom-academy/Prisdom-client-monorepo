import {
  Box,
  Center,
  Flex,
  HStack,
  Img,
  Text
} from '@chakra-ui/react';
import { CourseTracking } from './CourseTracking';
import { stylesComputed } from './styles';
import {
  ColorToken,
  TypoToken
} from '@prisdom/theme/base/interfaces';
import { NavTokenColor } from '@prisdom/theme/base/aliasTokens/interfaces';
import goldMedal from '@prisdom/theme/icons/Images/illustrations/GoldMedal.png';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import TextButton from '@prisdom/component-ui/src/buttons/TextButton';
import { InforCircleOutlined } from '@prisdom/theme/icons/SVGs/infoCircle';
import {
  TrendDownOutlined,
  TrendUpOutlined
} from '@prisdom/theme/icons/SVGs/trend';
import { PriscoinIconFilled } from '@prisdom/theme/icons/SVGs/priscoin';
import RightBarRankItem from './RightBarRankItem';
import { DataRanking } from 'data-test/data-ranking';
import { ClockIconFilled } from '@prisdom/theme/icons/SVGs/clock';

interface RightBarProps {
  isDownTrend?: boolean;
}

const RightBar = (props: RightBarProps) => {
  const { isDownTrend = false } = props;
  const styles = stylesComputed(isDownTrend);

  function _renderCoursesTrack() {
    return (
      <Flex
        borderRadius={'.8rem'}
        bgColor={NavTokenColor.alias_neutral_bg_2}
        p={3}
        id="rightBar-courses"
      >
        <CourseTracking
          mr={3}
          bgColor={ColorToken.global_success_transparent_16}
          bigTitleColor={ColorToken.success_base}
          subTitleColor={ColorToken.success_lighter}
          bigTitle={'11/20'}
          subTitle={'Courses completed'}
          percent={20}
        />
        <CourseTracking
          bgColor={ColorToken.global_warning_transparent_16}
          bigTitleColor={ColorToken.warning_base}
          subTitleColor={ColorToken.warning_lighter}
          bigTitle={'5'}
          subTitle={'Courses in progress'}
          percent={86}
        />
      </Flex>
    );
  }

  function _renderHeading() {
    return (
      <HStack w="100%" id="rightBar-heading">
        <Center
          mr={3}
          borderRadius={'.7rem'}
          boxSize={12}
          bgColor={ColorToken.global_primary_transparent_16}
        >
          <Img src={goldMedal} boxSize={8} />
        </Center>
        <Text layerStyle={TextLayer.largeBold2X}>Golden rank</Text>
        <TextButton
          variant={'secondary'}
          minW={'0'}
          ml="auto !important"
        >
          <InforCircleOutlined boxSize={'5'} />
        </TextButton>
      </HStack>
    );
  }

  function _renderMyRank() {
    return (
      <Box id="rightBar-rank" sx={styles.boxStyle} p="3">
        <Flex>
          <Text as="h4" layerStyle={TextLayer.largeBold}>
            Your rank is{' '}
            <Text
              as="span"
              layerStyle={TextLayer.largeBold}
              color={ColorToken.success_base}
            >
              #12
            </Text>
          </Text>
          <Center sx={styles.rankingBox} id="ranking-trend">
            {isDownTrend ? (
              <TrendDownOutlined
                boxSize={5}
                fill={ColorToken.error_lighter}
              />
            ) : (
              <TrendUpOutlined
                boxSize={5}
                fill={ColorToken.success_lighter}
              />
            )}
          </Center>
        </Flex>
        <HStack mt="3">
          <Center
            boxSize={8}
            borderRadius={'50%'}
            bgColor={ColorToken.warning_darker}
          >
            <PriscoinIconFilled
              boxSize={6}
              fill={ColorToken.warning_light}
            />
          </Center>
          <Text
            layerStyle={TextLayer.baseBoldNormal}
            color={TypoToken.type_neutral_default}
            mr="auto !important"
          >
            Priscoin today:
          </Text>
          <Text
            layerStyle={TextLayer.baseBoldNormal}
            color={ColorToken.warning_base}
          >
            124
          </Text>
        </HStack>
        <HStack mt="3">
          <Center
            boxSize={8}
            borderRadius={'50%'}
            bgColor={ColorToken.primary_base}
          >
            <ClockIconFilled
              boxSize={6}
              fill={ColorToken.primary_lighter}
            />
          </Center>
          <Text
            layerStyle={TextLayer.baseBoldNormal}
            color={TypoToken.type_neutral_default}
            mr="auto !important"
          >
            Time spent:
          </Text>
          <Text
            layerStyle={TextLayer.baseBoldNormal}
            color={ColorToken.primary_base}
          >
            12h30m
          </Text>
        </HStack>
      </Box>
    );
  }

  function _renderRankList() {
    return (
      <Box id="rightBar-rank-list" sx={styles.boxStyle}>
        <Text layerStyle={TextLayer.largeBold} m="4">
          Top 10 of this week
        </Text>
        <Box mt="4" id="rightBar-rank-list-box">
          {DataRanking.map((item) => (
            <RightBarRankItem {...item} mb="3" key={item.id} />
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={styles.root}>
      {_renderCoursesTrack()}
      <Flex id="right-bar-listRanks" sx={styles.secondarySection}>
        {_renderHeading()}
        {_renderMyRank()}
        {_renderRankList()}
      </Flex>
    </Box>
  );
};

export default RightBar;
