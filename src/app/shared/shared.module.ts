import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderComponent } from './view/loader/loader.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { InputBarComponent } from './components/input-bar/input-bar.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ActionButtonComponent,
    InputBarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatSnackBarModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatSnackBarModule,
    LoaderComponent,
    ActionButtonComponent,
    InputBarComponent
  ]
})
export class SharedModule { }
