import { defineStyle } from '@chakra-ui/react';

export const styleGenerator = (isLeftNavFixed: boolean) =>
  defineStyle({
    root: {
      mt: '3.5rem !important',
      ml: `${isLeftNavFixed ? '17.5rem' : '5rem'} !important`,
      w: `calc(100vw - ${isLeftNavFixed ? '17.5rem' : '5rem'})`,
      transition: 'all .3s',
      zIndex: -2,
      maxH: 'calc(100vh - 3.5rem)',
      overflowY: 'auto'
    }
  });
