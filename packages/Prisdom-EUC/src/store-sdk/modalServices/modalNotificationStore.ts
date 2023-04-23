import {
  INotificationModalStore,
  INoticModalData
} from './interfaces';
import { Subject } from 'rxjs';
import { injectable } from 'inversify';

@injectable()
// eslint-disable-next-line brace-style
export class NotificationModalStore
  implements INotificationModalStore
{
  private modalData = new Subject<INoticModalData | undefined>();
  public modalData$ = this.modalData.asObservable();

  show(data: INoticModalData) {
    this.modalData.next(data);
  }

  hide() {
    this.modalData.next(undefined);
  }
}
