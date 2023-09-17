import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent {
    @Output() switchViewControl: EventEmitter<string> = new EventEmitter<string>();

    public passwordRecoveryForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
    });
    public isFormSubmitted: boolean = false;

    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
    ) {
        
    }

    public onPasswordRecovery(): void {
        if(this.isFormSubmitted) {
            return;
        }

        if(this.passwordRecoveryForm.invalid) {
            this.notificationService.showNotification('Incorrect data format', 'OK', 3000);
            this.passwordRecoveryForm.markAsDirty();
            return;
        }

        this.isFormSubmitted = true;
        const {email} = this.passwordRecoveryForm.value;

        this.authService.recoverPassword({email}).subscribe({
            next: () => {
                this.notificationService.showNotification('If this email is correct, you will receive a password recovery link', 'OK', 3000);
            },
            error: () => {
                this.isFormSubmitted = false;
            },
            complete: () => {
                this.isFormSubmitted = false;
            }
        });

    }

    public switchView(view: string): void {
        this.switchViewControl.emit(view);
    }
}
