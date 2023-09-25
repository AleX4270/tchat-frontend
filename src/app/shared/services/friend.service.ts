import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
    private friendData: any;
    private friendDataSubject: Subject<any> = new Subject<any>();

    constructor(
        private readonly http: HttpClient
    ) {

    }

    //Local methods
    public selectFriend(friend: any) {
        this.friendData = friend;
        this.friendDataSubject.next(friend);
        console.log(friend);
    }

    public getFriendData(): any {
        return this.friendDataSubject.asObservable();
    }

    //API methods
    public getUsers(term: string): Observable<any> {
        return this.http.get(`${environment.backendUrl}/list?term=${term}`);
    }
}
