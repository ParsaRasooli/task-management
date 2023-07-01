import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Injector } from '@angular/core';

export class Notifservice {
  static notifinjector: Injector;
}

@Injectable()
export class NotificationService {
  constructor(private toast: ToastrService) {}

  /**
   * returms a toast success
   * @param message your message in string
   */
  Succsess(message: string) {
    this.toast.success(message, '', {
      easing: 'ease-in',
      easeTime: 500,
      closeButton: true,
    });
  }

  /**
   * returns a toast error
   * @param message your error message in string
   */
  error(message: string) {
    this.toast.error(message, '', {
      easing: 'ease-in',
      easeTime: 500,
      closeButton: true,
    });
  }
}
