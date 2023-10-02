import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserStoreService } from 'src/app/shared/services/user-store.service';  
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { FriendService } from 'src/app/shared/services/friend.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
    public friendData: any;
    public testMessages: any[] = [
        {
            isSender: true,
            message: 'Hello',
            timestamp: '12:00'
        },
        {
            isSender: false,
            message: "I'm fine, thanks. How are you?",
            timestamp: '12:05'
        },
        {
            isSender: true,
            message: "I'm good too, thanks for asking.",
            timestamp: '12:06'
        },
        {
            isSender: true,
            message: "What are you doing today?",   
            timestamp: '12:07'
        },
        {
            isSender: false,
            message: "I'm going to the park with my dog.",   
            timestamp: '12:08'
        },
        {
            isSender: false,
            message: "Do you want to come?",   
            timestamp: '12:08'
        },
        {
            isSender: true,
            message: "I'd love to, but I'm busy today.", 
            timestamp: '12:09'
        },
        {
            isSender: true,
            message: "Maybe some other time.",   
            timestamp: '12:10'
        },
        {
            isSender: false,
            message: "Ok, no problem.",   
            timestamp: '12:10'
        },
        {
            isSender: false,
            message: "Have a nice day!",   
            timestamp: '12:10'
        },
        {
            isSender: true,
            message: "You too!",   
            timestamp: '12:12'
        },
    ];

    constructor(
        private authService: AuthService,
        private userStoreService: UserStoreService,
        private router: Router,
        private notificationService: NotificationService,
        private friendService: FriendService
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

    ngOnInit(): void {
        this.friendService.getFriendData().subscribe((friend: any) => {
            this.friendData = friend;
            //TODO: get messages from backend
        });
    }    
}
