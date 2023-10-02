import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderComponent } from './view/loader/loader.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { InputBarComponent } from './components/input-bar/input-bar.component';
import { FriendBoxComponent } from './components/friend-box/friend-box.component';
import { FormsModule } from '@angular/forms';
import { MessageBubbleComponent } from './components/message-bubble/message-bubble.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ActionButtonComponent,
    InputBarComponent,
    FriendBoxComponent,
    MessageBubbleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatSnackBarModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatSnackBarModule,
    LoaderComponent,
    ActionButtonComponent,
    InputBarComponent,
    FriendBoxComponent,
    MessageBubbleComponent,
  ]
})
export class SharedModule { }
