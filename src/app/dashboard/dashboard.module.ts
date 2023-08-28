import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  declarations: [
    PanelComponent,
    DashboardComponent,
    ActionBarComponent,
    ChatViewComponent,
    ListViewComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
