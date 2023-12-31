import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit{
    public passwordToken: string = '';

    public isLoginVisible: boolean = false;
    public isRegisterVisible: boolean = false;
    public isPasswordRecoveryVisible: boolean = false;
    public isPasswordCreateVisible: boolean = false;
    public isMainVisible: boolean = true;
    public isReturnBtnVisible: boolean = false;

    constructor(
        private route: ActivatedRoute,
    ) {

    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            let tempToken = this.route.snapshot.paramMap.get('token');

            if(tempToken !== null) {
                this.passwordToken = tempToken;
                this.switchMode('password-create');
            }
        });
    }

    public switchMode(mode: string): void {
        switch (mode) {
            case 'login':
                this.isLoginVisible = true;
                this.isRegisterVisible = false;
                this.isPasswordRecoveryVisible = false;
                this.isPasswordCreateVisible = false;
                this.isMainVisible = false;
                this.isReturnBtnVisible = true;
                break;
            case 'register':
                this.isLoginVisible = false;
                this.isRegisterVisible = true;
                this.isPasswordRecoveryVisible = false;
                this.isPasswordCreateVisible = false;
                this.isMainVisible = false;
                this.isReturnBtnVisible = true;
                break;
            case 'password-recovery':
                this.isLoginVisible = false;
                this.isRegisterVisible = false;
                this.isPasswordRecoveryVisible = true;
                this.isPasswordCreateVisible = false;
                this.isMainVisible = false;
                this.isReturnBtnVisible = true;
                break;
            case 'password-create':
                this.isLoginVisible = false;
                this.isRegisterVisible = false;
                this.isPasswordRecoveryVisible = false;
                this.isPasswordCreateVisible = true;
                this.isMainVisible = false;
                this.isReturnBtnVisible = false;
                break;
            default:
                this.isLoginVisible = false;
                this.isRegisterVisible = false;
                this.isPasswordRecoveryVisible = false;
                this.isPasswordCreateVisible = false;
                this.isMainVisible = true;
                this.isReturnBtnVisible = false;
                break;
        }
    }
}
