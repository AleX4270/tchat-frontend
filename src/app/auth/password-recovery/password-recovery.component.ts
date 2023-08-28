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
            this.notificationService.showNotification('Podano dane w nieprawidłowym formacie.', 'OK', 3000);
            this.passwordRecoveryForm.markAsDirty();
            return;
        }

        this.isFormSubmitted = true;
        const {email} = this.passwordRecoveryForm.value;

        this.authService.recoverPassword({email}).subscribe({
            next: () => {
                this.notificationService.showNotification('Jeśli podany adres znajduje się w naszej bazie to wysłaliśmy na niego link resetujący hasło.', 'OK', 3000);
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
