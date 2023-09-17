import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserStoreService } from 'src/app/shared/services/user-store.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
    public testFriendList: any[] = [
        { username: 'John Doe', status: 'online' },
        { username: 'Jane Doe', status: 'offline' },
        { username: 'John Smith', status: 'online' },
        { username: 'Jane Smith', status: 'offline' },
    ];
}
