import { defineStyle } from '@chakra-ui/react';
import { merge } from 'lodash';
import { ChipToken } from 'theme/base/interfaces';

export type ChipVariant = 'default' | 'elevator';
export const stylesGenerator = (variant: ChipVariant) => {
  const variantsForNormalState = defineStyle({
    default: {
      borderColor: ChipToken.cpn_chips_stroke_00_default,
      color: ChipToken.cpn_chips_content_00_default,
      fill: ChipToken.cpn_chips_content_00_default,
      _hover: {
        bgColor: ChipToken.cpn_chips_bg0_00_hovered,
        borderColor: ChipToken.cpn_chips_stroke_00_hovered
      },
      _disabled: {
        bgColor: 'transparent !important',
        color: ChipToken.cpn_chips_content_00_disabled + '!important',
        borderColor:
          ChipToken.cpn_chips_content_00_disabled + '!important',
        fill: ChipToken.cpn_chips_content_00_disabled + '!important'
      }
    },

    elevator: {
      borderColor: 'transparent !important',
      color: ChipToken.cpn_chips_content_0e_default,
      fill: ChipToken.cpn_chips_content_0e_default,
      bgColor: ChipToken.cpn_chips_bg0_0e_default,
      _hover: {
        opacity: 0.7
      },
      _disabled: {
        opacity: 1,
        bgColor: ChipToken.cpn_chips_0e_disabled,
        color: ChipToken.cpn_chips_0e_disabled + '!important',
        fill: ChipToken.cpn_chips_0e_disabled + '!important'
      }
    }
  });

  const variantForSelectedState = defineStyle({
    default: {
      bgColor: ChipToken.cpn_chips_bg_0_00_focused,
      color: ChipToken.cpn_chips_content_0_00_focused,
      fill: ChipToken.cpn_chips_content_0_00_focused,

      _hover: {
        color: ChipToken.cpn_chips_content_0_00_focused,
        fill: ChipToken.cpn_chips_content_0_00_focused
      }
    },

    elevator: {
      bgColor: ChipToken.cpn_chips_bg_0e_focused,
      color: ChipToken.cpn_chips_content_0e_focused,
      fill: ChipToken.cpn_chips_content_0e_focused,

      _hover: {
        color: ChipToken.cpn_chips_content_0e_focused,
        fill: ChipToken.cpn_chips_content_0e_focused
      }
    }
  });

  const chipBaseStyle = defineStyle({
    chip: {
      border: '1px solid',
      minW: '4rem',
      minH: '2rem',
      p: '0 .75rem',
      _disabled: {
        cursor: 'not-allowed'
      }
    }
  });

  return {
    // using merge here if we want to merge object recursively
    chip: merge(chipBaseStyle.chip, variantsForNormalState[variant]),

    selectedChip: {
      ...variantForSelectedState[variant]
    }
  };
};
