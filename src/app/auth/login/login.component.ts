import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { UserStoreService } from 'src/app/shared/services/user-store.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    @Output() switchViewControl: EventEmitter<string> = new EventEmitter<string>();

    public loginForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    });
    public isFormSubmitted: boolean = false;

    constructor(
        private authService: AuthService,
        private userStoreService: UserStoreService,
        private notificationService: NotificationService,
        private router: Router,
    ) {

    }

    public onLogin(): void {
        if(this.isFormSubmitted) {
            return;
        }

        if(this.loginForm.invalid) {
            this.notificationService.showNotification('Dane zostały uzupełnione w nieprawidłowy sposób', 'OK', 3000);
            this.loginForm.markAsDirty();
            return;
        }

        this.isFormSubmitted = true;
        const {email, password} = this.loginForm.value;
        this.authService.login({email, password}).subscribe({
            next: (res) => {
                if(!res['token']) {
                    this.loginForm.markAsDirty();
                }
                else {
                    this.userStoreService.saveUser({
                        token: res['token'],
                        name: res['name'],
                    });

                    this.router.navigateByUrl('/dashboard');
                }
                this.isFormSubmitted = false;
            },
            error: () => {
                this.notificationService.showNotification('Podano błędne dane użytkownika', 'OK', 3000);
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
