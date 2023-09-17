import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserStoreService } from 'src/app/shared/services/user-store.service';  
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent {
    constructor(
        private authService: AuthService,
        private userStoreService: UserStoreService,
        private router: Router,
        private notificationService: NotificationService,
    ) {

    }

    public onLogout(): void {
        this.authService.logout().subscribe({
            next: (response) => {
                this.userStoreService.clearUser();
            },
            error: (error) => {},
            complete: () => {
                this.router.navigate(['/']);
                this.notificationService.showNotification('Logged out successfully', 'OK', 3000);
            }
        });
    }
}
