import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent {
    @Output() switchViewControl: EventEmitter<string> = new EventEmitter<string>();

    public loginForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    });
    public isFormSubmitted: boolean = false;

    constructor(

    ) {

    }

    public onLogin(): void {
        
    }

    public switchView(view: string): void {
        this.switchViewControl.emit(view);
    }
}
