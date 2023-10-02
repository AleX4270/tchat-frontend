import { Component, OnInit } from '@angular/core';
import { FriendService } from 'src/app/shared/services/friend.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserStoreService } from 'src/app/shared/services/user-store.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
    public userList: any[] = [];
    public listAll: boolean = false;
    public listFriends: boolean = true;

    constructor(
        private readonly friendService: FriendService,
    ) {
        
    }

    ngOnInit(): void {
        if(this.listAll) {
            this.getUserList();
        }
        else {
            this.getFriendList();
        }
    }

    public getUserList(params: any = {}): void {
        this.friendService.getUsers(params.term).subscribe({
            next: (response: any) => {
                this.userList = response.data;
            },
            error: (error: any) => {
                console.log(error);
            },
            complete: () => {
                this.userList.forEach((user: any) => {
                    user.status = user.is_online ? 'online' : 'offline';
                });
            }
        });
    }

    public getFriendList(params: any = {}): void {
        this.friendService.getFriends(params.term).subscribe({
            next: (response: any) => {
                this.userList = response.data;
            },
            error: (error: any) => {
                console.log(error);
            },
            complete: () => {
                this.userList.forEach((user: any, index: number) => {
                    user.status = user.is_online ? 'online' : 'offline';

                    //DEBUG
                    if(index === 0) {
                        this.onFriendSelected(user);
                    }
                });
            }
        });
    }

    public onFriendSelected(friend: any) {
        this.friendService.selectFriend(friend);
    }

    public onUserTermInput(input: any) {
        this.getFriendList({ term: input });
    }

    public changeUserListType(type: string) {
        if(type == 'all') {
            this.listAll = true;
            this.listFriends = false;
            this.getUserList();
        }
        else {
            this.listAll = false;
            this.listFriends = true;
            this.getFriendList();
        }
    }
}
