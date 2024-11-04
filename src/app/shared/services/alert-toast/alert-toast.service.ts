import { Injectable, signal } from '@angular/core';
import { AlertToastMessageInterface } from '../../interfaces/alert-toast-message.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertToastService {
  alertToastMessage = new Subject<AlertToastMessageInterface>();

  constructor() { }

  error(message: string): void {
    this.alertToastMessage.next({ message, isOpen: true });
  }

  hide(): void {
    this.alertToastMessage.next({ message: '', isOpen: false });
  }
}
