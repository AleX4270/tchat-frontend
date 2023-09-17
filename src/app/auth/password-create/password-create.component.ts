import { Component ,EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-password-create',
  templateUrl: './password-create.component.html',
  styleUrls: ['./password-create.component.scss']
})
export class PasswordCreateComponent {
    @Input() passwordToken: string = '';
    @Output() switchViewControl: EventEmitter<string> = new EventEmitter<string>();

    public passwordCreateForm: FormGroup = new FormGroup({
        password: new FormControl('', [Validators.required]),
        password_confirmation: new FormControl('', [Validators.required])
    });
    public isFormSubmitted: boolean = false;

    constructor(
        private notificationService: NotificationService,
        private authService: AuthService,
    ) {
        
    }

    public getTokenFromUrl(): string {
        return '';
    }

    public onPasswordCreate(): void {
        if(this.isFormSubmitted) {
            return;
        }

        if(this.passwordCreateForm.invalid) {
            this.notificationService.showNotification('Incorrect data format', 'OK', 3000);
            this.passwordCreateForm.markAsDirty();
            return;
        }

        if(this.passwordCreateForm.value.password !== this.passwordCreateForm.value.password_confirmation) {
            this.notificationService.showNotification('Passwords are not the same', 'OK', 3000);
            return;
        }

        this.isFormSubmitted = true;
        const data = {
            token: this.passwordToken,
            password: this.passwordCreateForm.value.password,
            password_confirmation: this.passwordCreateForm.value.password_confirmation
        }

        this.authService.resetPassword(data).subscribe({
            next: (res) => {
                if(res.status === 'success') {
                    this.notificationService.showNotification('Password has been changed', 'OK', 3000);
                    this.switchView('login');
                }
                else {
                    this.notificationService.showNotification('Incorrect token', 'OK', 3000);
                }
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
