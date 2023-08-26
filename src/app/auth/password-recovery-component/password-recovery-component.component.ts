import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-recovery-component',
  templateUrl: './password-recovery-component.component.html',
  styleUrls: ['./password-recovery-component.component.scss']
})
export class PasswordRecoveryComponentComponent {
    @Output() switchViewControl: EventEmitter<string> = new EventEmitter<string>();

    public passwordRecoveryForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
    });
    public isFormSubmitted: boolean = false;

    constructor(

    ) {
        
    }

    public onPasswordRecovery(): void {
        
    }

    public switchView(view: string): void {
        this.switchViewControl.emit(view);
    }
}
