import {
  INotificationModalStore,
  INoticModalData
} from './interfaces';
import { Subject } from 'rxjs';
import { injectable } from 'inversify';

@injectable()
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
