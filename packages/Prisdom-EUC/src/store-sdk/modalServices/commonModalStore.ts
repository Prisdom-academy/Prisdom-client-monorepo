import { injectable } from 'inversify';
import { Subject } from 'rxjs';
import { ICommonModalData, ICommonModalStore } from './interfaces';

@injectable()
export class CommonModalStore implements ICommonModalStore {
  private modalData = new Subject<ICommonModalData | undefined>();

  public modalData$ = this.modalData.asObservable();

  show(data: ICommonModalData) {
    this.modalData.next(data);
  }

  hide(onClose: () => void) {
    this.modalData.next(undefined);
    onClose && onClose();
  }
}
