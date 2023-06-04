/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/react';
import {
  Fragment,
  PropsWithChildren,
  useEffect,
  useState
} from 'react';
import {
  INotificationModalStore,
  INoticModalData,
  ICommonModalStore,
  ICommonModalData
} from 'store-sdk/modalServices/interfaces';
import { CommonModal } from './CommonModal';
import { NotificationModal } from './NotificationModal';
import { Symbols } from '@prisdom/services/src/symbols';
import { useInjection } from 'store-sdk/injection.hook';

interface INotificationContainer extends PropsWithChildren<any> {}

/**
 * Use to control modal through store
 * @param props Props
 * @return JSX Element
 */
export const ModalContainer = (props: INotificationContainer) => {
  const {
    isOpen: noticIsOpen,
    onClose: noticOnClose,
    onOpen: noticOnOpen
  } = useDisclosure();
  const {
    isOpen: commonIsOpen,
    onClose: commonOnClose,
    onOpen: commonOnOpen
  } = useDisclosure();

  const [modalData, setModalData] = useState<INoticModalData>();
  const [commonData, setCommonData] = useState<ICommonModalData>();

  const notificationModalStore =
    useInjection<INotificationModalStore>(
      Symbols.INotificationModalStore
    );

  const commonModalStore = useInjection<ICommonModalStore>(
    Symbols.ICommonModalStore
  );

  function _onCloseNoticModal() {
    notificationModalStore.hide();
  }
  function _onCloseCommonModal() {
    commonModalStore.hide();
  }

  useEffect(() => {
    const subNotic = notificationModalStore.modalData$.subscribe(
      (data) => {
        if (data) {
          noticOnOpen();
          setModalData(data);
        } else {
          noticOnClose();
          setModalData(undefined);
        }
      }
    );

    const subCommon = commonModalStore.modalData$.subscribe(
      (data) => {
        if (data) {
          commonOnOpen();
          setCommonData(data);
        } else {
          commonOnClose();
          setCommonData(undefined);
        }
      }
    );

    return () => {
      subNotic.unsubscribe();
      subCommon.unsubscribe();
    };
  }, []);

  return (
    <Fragment>
      {props.children}
      <NotificationModal
        title={modalData?.title}
        isOpen={noticIsOpen}
        onClose={_onCloseNoticModal}
        content={modalData?.content}
        type={modalData?.type}
      ></NotificationModal>
      <CommonModal
        isOpen={commonIsOpen}
        onClose={_onCloseCommonModal}
        size={commonData?.size}
        motionPreset={commonData?.motionPreset}
      >
        {commonData?.content}
      </CommonModal>
    </Fragment>
  );
};
