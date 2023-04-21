import {
  Avatar,
  Center,
  HStack,
  StackProps,
  Text
} from '@chakra-ui/react';
import { RankMedalGold } from '@prisdom/theme/icons/SVGs/rankMedal';
import { TextLayer } from '@prisdom/theme/typography/interfaces';
import { stylesComputed } from './styles';
import {
  ColorToken,
  TypoToken
} from '@prisdom/theme/base/interfaces';
import { PriscoinIconFilled } from '@prisdom/theme/icons/SVGs/priscoin';
import { Link } from 'react-router-dom';
import { ExtendedColor } from '@prisdom/theme/colors/interfaces';
import { IsMeArrowIcon } from '@prisdom/theme/icons/SVGs/arrow';

interface IRightBarRankItem extends StackProps {
  id: string;
  indexNumber: number;
  imgSrc: string;
  userName: string;
  coinNumber: number;
  isOnline: boolean;
  badge?: any;
  isMe?: boolean;
}

const RightBarRankItem = (props: IRightBarRankItem) => {
  const {
    badge,
    imgSrc,
    userName,
    coinNumber,
    indexNumber,
    isOnline,
    id,
    isMe,
    ...rest
  } = props;

  const styles = stylesComputed(false, isMe);
  function _renderRankingNumber() {
    return indexNumber <= 3 ? (
      <Center pos="relative" ml="-5px">
        <RankMedalGold boxSize={8} />
        <Text
          layerStyle={TextLayer.smallBoldNormal2X}
          sx={styles.rankGoldNumber}
        >
          {indexNumber}
        </Text>
      </Center>
    ) : (
      <Text
        mx="2"
        layerStyle={TextLayer.smallBoldNormal2X}
        color={ExtendedColor['darkLevel.300']}
      >
        {indexNumber}
      </Text>
    );
  }

  return (
    <HStack
      {...rest}
      id={`right-bar-item-${id}`}
      sx={styles.rightBarItem}
    >
      {_renderRankingNumber()}
      <Avatar name={userName} src={imgSrc} boxSize="9" />
      <Text
        mr="auto !important"
        layerStyle={TextLayer.baseRegularNormal}
        color={TypoToken.type_link_focus}
      >
        <Link to="/">{userName}</Link>
      </Text>
      <Center
        boxSize="6"
        borderRadius={'50%'}
        bgColor={ColorToken.warning_darker}
      >
        <PriscoinIconFilled
          boxSize="4"
          fill={ColorToken.warning_light}
        />
      </Center>
      <Text
        layerStyle={TextLayer.smallBoldNormalX}
        color={TypoToken.type_neutral_default}
      >
        {coinNumber}
      </Text>

      {isMe && <IsMeArrowIcon sx={styles.arrowIcon} />}
    </HStack>
  );
};

export default RightBarRankItem;
