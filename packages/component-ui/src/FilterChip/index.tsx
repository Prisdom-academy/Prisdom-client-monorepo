import { Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ChipToken } from 'theme/base/interfaces';
import CheckIcon from 'theme/icons/SVGs/check';
import CloseIcon from 'theme/icons/SVGs/close';
import { TextLayer } from 'theme/typography/interfaces';
import { stylesGenerator } from './style';

interface IFilterChipProps {
  Icon: JSX.Element;
  title: string;
  preState?: boolean;
  chipType?: 'round' | 'no-round';
  onClick?: (isSelected: boolean) => void;
  variant?: 'base' | 'no-border';
  className?: string;
}

const FilteredChip = (props: IFilterChipProps) => {
  const {
    Icon,
    preState,
    chipType = 'no-round',
    title,
    onClick,
    variant = 'base',
    className
  } = props;

  const [isSelected, setIsSelected] = useState(false);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const styles = stylesGenerator({ variant });

  const _getContentColor = () => {
    let contentColor = ChipToken.cpn_chips_content_00_default;

    if (isSelected && !isMouseEnter) {
      contentColor =
        variant === 'base'
          ? ChipToken.cpn_chips_content_s0_default
          : ChipToken.cpn_chips_content_se_default;
    } else if (isSelected && isMouseEnter) {
      contentColor =
        variant === 'base'
          ? ChipToken.cpn_chips_content_s0_hovered
          : ChipToken.cpn_chips_content_se_default;
    }

    return contentColor;
  };

  const _renderIcon = () => {
    const defaultProps = {
      fill: ChipToken.cpn_chips_content_00_default,
      mr: '.3rem',
      h: '20px',
      w: '20px'
    };

    return React.cloneElement(Icon, defaultProps);
  };

  const _renderCheckedIcon = () => {
    return (
      <CheckIcon
        fill={_getContentColor()}
        h="20px"
        w="20px"
        mr=".3rem"
      />
    );
  };

  const _renderCloseBox = () => {
    const isSelectedAndHovered = isSelected && isMouseEnter;
    return (
      <Flex
        sx={styles.closeBox}
        right={isSelectedAndHovered ? '0' : '-100%'}
      >
        <CloseIcon fill={_getContentColor()} h="20px" w="20px" />
      </Flex>
    );
  };

  const _onClick = () => {
    setIsSelected(!isSelected);
    onClick?.(!isSelected);
  };

  const chipStyles = {
    ...styles.filterChip,
    ...(isSelected ? styles.filterChipSelected : {})
  };

  useEffect(() => {
    preState && setIsSelected(preState);
  }, [preState]);

  return (
    <Button
      onClick={_onClick}
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
      sx={chipStyles}
      borderRadius={chipType === 'no-round' ? '.45rem' : '10rem'}
      className={className}
    >
      {isSelected ? _renderCheckedIcon() : _renderIcon()}
      <Text
        color={_getContentColor()}
        layerStyle={TextLayer.smallRegularNormal}
      >
        {title}
      </Text>
      {_renderCloseBox()}
    </Button>
  );
};

export default FilteredChip;
