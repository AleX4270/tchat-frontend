import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    constructor(
        private snackBar: MatSnackBar
    ) {

    }

    public showNotification(message: string, action: string, duration: number) {
        this.snackBar.open(message, action, {
            duration: duration,
            verticalPosition: 'top',
            panelClass: 'success-snackbar'
        });
    }
}