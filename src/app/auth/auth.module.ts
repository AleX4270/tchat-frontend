import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page/start-page.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { PasswordRecoveryComponentComponent } from './password-recovery-component/password-recovery-component.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    StartPageComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    PasswordRecoveryComponentComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
