import { ModalProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Observable } from 'rxjs';
import { NotificationModalType } from 'store-sdk/modalServices/ModalViews/NotificationModal';

export interface INoticModalData {
  title: string;
  content: string;
  type: NotificationModalType;
}

export interface ICommonModalData {
  content: ReactNode;
  size?: 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  haveCloseButton?: boolean;
  motionPreset?: ModalProps['motionPreset'];
}

export interface INotificationModalStore {
  modalData$: Observable<INoticModalData | undefined>;
  hide(): void;
  show(data: INoticModalData): void;
}

export interface ICommonModalStore {
  modalData$: Observable<ICommonModalData | undefined>;
  hide(onClose?: () => void): void;
  show(data: ICommonModalData): void;
}
