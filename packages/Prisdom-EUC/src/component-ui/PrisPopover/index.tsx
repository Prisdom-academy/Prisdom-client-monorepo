import {
  Collapse,
  Flex,
  SystemStyleObject,
  useOutsideClick
} from '@chakra-ui/react';
import { PropsWithChildren, useRef } from 'react';
import { styles } from './styles';

interface IPrisPopoverProps extends PropsWithChildren<any> {
  isShow: boolean;
  sx?: SystemStyleObject;
  onClickOutside?(): void;
  dataTestId?: string;
  id?: string;
}

export const PrisPopover = (props: IPrisPopoverProps) => {
  const {
    isShow,
    sx = {},
    children,
    onClickOutside,
    dataTestId,
    id
  } = props;

  const panelRef = useRef(null);
  useOutsideClick({
    handler: onClickOutside,
    ref: panelRef
  });

  const sxStyle = {
    ...styles.root,
    ...sx
  };
  return (
    <Collapse in={isShow} unmountOnExit>
      <Flex
        data-testid={dataTestId}
        sx={sxStyle}
        ref={panelRef}
        id={id}
      >
        {children}
      </Flex>
    </Collapse>
  );
};
