import { defineStyle } from '@chakra-ui/react';
import { ChipToken } from 'theme/base/interfaces';
import { ExtendedColor } from 'theme/colors/interfaces';

interface IStyleParams {
  variant: 'base' | 'no-border';
}

export const stylesGenerator = (params: IStyleParams) => {
  const baseVariant = defineStyle({
    filterChip: {
      borderColor: ChipToken.cpn_chips_stroke_00_default,

      _hover: {
        bg: ChipToken.cpn_chips_bg0_00_hovered,
        borderColor: ChipToken.cpn_chips_stroke_00_hovered
      },

      _active: {
        bg: ChipToken.cpn_chips_bg0_00_hovered,
        borderColor: ChipToken.cpn_chips_stroke_00_pressed
      }
    },

    filterChipSelected: {
      bgColor: ChipToken.cpn_chips_bg0_s0_default,
      borderColor: ChipToken.cpn_chips_content_s0_hovered,

      _hover: {
        borderColor: ChipToken.cpn_chips_content_s0_hovered,
        bgColor: ChipToken.cpn_chips_bg0_s0_default
      },

      _active: {
        bg: ChipToken.cpn_chips_bg0_s0_pressed,
        borderColor: ChipToken.cpn_chips_content_s0_hovered
      }
    }
  });

  const noBorderVariant = defineStyle({
    filterChip: {
      border: 'none',
      bg: ChipToken.cpn_chips_bg0_0e_default,

      _hover: {
        opacity: '.7'
      },

      _active: {
        opacity: 1
      }
    },

    filterChipSelected: {
      bgColor: ChipToken.cpn_chips_bg0_se_default,
      border: 'none',

      _hover: {
        bgColor: ChipToken.cpn_chips_bg0_se_default
      },

      _active: {
        bg: ChipToken.cpn_chips_bg0_se_pressed,

        p: {
          color: ExtendedColor['darkLevel.100']
        }
      }
    },

    closeBox: {
      bgColor: ChipToken.cpn_chips_icon_bg_se_hovered
    }
  });

  let selectedVariant = baseVariant as any;

  switch (params.variant) {
    case 'no-border':
      selectedVariant = noBorderVariant;
      break;

    default:
      break;
  }

  return {
    filterChip: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '32px',
      w: '108px',
      border: '1px solid',
      cursor: 'pointer',
      overflow: 'hidden',
      position: 'relative',
      ...selectedVariant.filterChip
    },

    closeBox: {
      height: '2rem',
      width: '2rem',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '0',
      transition: 'all .5s ease',
      bg: ChipToken.cpn_chips_icon_bg_s0_hovered,

      ...selectedVariant.closeBox
    },

    filterChipSelected: {
      ...selectedVariant.filterChipSelected
    }
  };
};
