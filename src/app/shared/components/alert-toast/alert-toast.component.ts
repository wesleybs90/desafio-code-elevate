import { Component, inject } from '@angular/core';
import { AlertToastService } from '../../services/alert-toast/alert-toast.service';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AlertToastMessageInterface } from '../../interfaces/alert-toast-message.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-alert-toast',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './alert-toast.component.html',
  styleUrl: './alert-toast.component.scss'
})
export class AlertToastComponent {
  alertToast$!: Observable<AlertToastMessageInterface>;

  private readonly alertToastService = inject(AlertToastService);

  ngOnInit() {
    this.alertToast$ = this.alertToastService.alertToastMessage.pipe(
      tap(() => {
        setTimeout(() => {
          this.alertToastService.hide();
        }, 10000);
      })
    );
  }

  closeAlertToast(): void {
    this.alertToastService.hide();
  }
}
