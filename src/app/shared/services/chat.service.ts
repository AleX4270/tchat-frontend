import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
    constructor(
        private readonly http: HttpClient
    ) {

    }
    
    public history(recipientId: number, size: number): Observable<any> {
        return this.http.get(`${environment.backendUrl}/chat-history?recipientId=${recipientId}&size=${size}`);
    }
}
