import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
        confirmPassword: new FormControl('', [Validators.required])
    });
    public isFormSubmitted: boolean = false;

    constructor(

    ) {

    }

    public onRegister(): void {
        
    }

    public switchView(view: string): void {
        this.switchViewControl.emit(view);
    }
}
