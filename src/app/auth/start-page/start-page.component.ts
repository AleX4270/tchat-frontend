import { Component } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
    public isLoginVisible: boolean = false;
    public isRegisterVisible: boolean = false;
    public isPasswordRecoveryVisible: boolean = false;
    public isMainVisible: boolean = true;
    public isReturnBtnVisible: boolean = false;

    constructor(

    ) {

    }

    public switchMode(mode: string): void {
        switch (mode) {
            case 'login':
                this.isLoginVisible = true;
                this.isRegisterVisible = false;
                this.isPasswordRecoveryVisible = false;
                this.isMainVisible = false;
                this.isReturnBtnVisible = true;
                break;
            case 'register':
                this.isLoginVisible = false;
                this.isRegisterVisible = true;
                this.isPasswordRecoveryVisible = false;
                this.isMainVisible = false;
                this.isReturnBtnVisible = true;
                break;
            case 'password-recovery':
                this.isLoginVisible = false;
                this.isRegisterVisible = false;
                this.isPasswordRecoveryVisible = true;
                this.isMainVisible = false;
                this.isReturnBtnVisible = true;
                break;
            default:
                this.isLoginVisible = false;
                this.isRegisterVisible = false;
                this.isPasswordRecoveryVisible = false;
                this.isMainVisible = true;
                this.isReturnBtnVisible = false;
                break;
        }
    }
}
