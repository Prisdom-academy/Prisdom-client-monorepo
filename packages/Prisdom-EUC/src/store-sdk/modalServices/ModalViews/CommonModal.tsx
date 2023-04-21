import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalProps,
  useColorModeValue
} from '@chakra-ui/react';

export interface ICommonModalProps extends ModalProps {
  onClose(): void;
  isOpen: boolean;
  haveCloseButton?: boolean;
}

/**
 * Modal central controller
 * @param props ModalProps
 * @return JSS
 */
export const CommonModal = (props: ICommonModalProps) => {
  const {
    onClose,
    isOpen,
    haveCloseButton = true,
    children,
    motionPreset = 'slideInBottom',
    size = '2xl'
  } = props;

  const closeButtonColor = useColorModeValue('gray.800', 'white');

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      size={size}
      motionPreset={motionPreset}
    >
      <ModalOverlay />
      <ModalContent minH={'20rem'} p="1rem 1.5rem">
        {haveCloseButton && (
          <ModalCloseButton color={closeButtonColor} />
        )}
        {children}
      </ModalContent>
    </Modal>
  );
};
