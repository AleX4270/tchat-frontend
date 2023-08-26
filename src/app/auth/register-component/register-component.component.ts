import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent {
    @Output() switchViewControl: EventEmitter<string> = new EventEmitter<string>();

    public registerForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        password_confirmation: new FormControl('', [Validators.required])
    });
    public isFormSubmitted: boolean = false;

    constructor(
        private authService: AuthService,
        private notificationService: NotificationService,
        private router: Router,
    ) {

    }

    public onRegister(): void {
        if(this.isFormSubmitted) {
            return;
        }

        if(this.registerForm.invalid) {
            this.notificationService.showNotification('Dane zostały uzupełnione w nieprawidłowy sposób', 'OK', 3000);
            this.registerForm.markAsDirty();
            return;
        }

        this.isFormSubmitted = true;
        const {email, password, password_confirmation} = this.registerForm.value;
        this.authService.register({email, password, password_confirmation}).subscribe({
            next: (res) => {
                this.notificationService.showNotification('Pomyślnie zarejestrowano', 'OK', 3000);
                this.router.navigate(['/']);
                this.isFormSubmitted = false;
            },
            error: () => {
                this.notificationService.showNotification('Nie udało się zarejestrować.', 'OK', 3000);
                this.isFormSubmitted = false;
            },
            complete: () => {
                this.isFormSubmitted = false;
            }
        })
    }

    public switchView(view: string): void {
        this.switchViewControl.emit(view);
    }
}
