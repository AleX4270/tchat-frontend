import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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
            this.notificationService.showNotification('Incorrect data format', 'OK', 3000);
            this.registerForm.markAsDirty();
            return;
        }

        if(this.registerForm.value.password !== this.registerForm.value.password_confirmation) {
            this.notificationService.showNotification('Passwords are not the same', 'OK', 3000);
            return;
        }

        this.isFormSubmitted = true;
        const {email, password, password_confirmation} = this.registerForm.value;
        this.authService.register({email, password, password_confirmation}).subscribe({
            next: (res) => {
                this.notificationService.showNotification('Registered successfully', 'OK', 3000);
                this.router.navigate(['/']);
                this.isFormSubmitted = false;
            },
            error: () => {
                this.notificationService.showNotification('An error occured while trying to register a new user', 'OK', 3000);
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
