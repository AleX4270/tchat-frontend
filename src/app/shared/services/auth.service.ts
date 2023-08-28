import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(
        private readonly http: HttpClient
    ) {}

    public register(data: any): Observable<any> {
        return this.http.post(`${environment.backendUrl}/register`, data);
    }

    public login(data: any): Observable<any> {
        return this.http.post(`${environment.backendUrl}/login`, data);
    }

    public recoverPassword(data: any): Observable<any> {
        return this.http.post(`${environment.backendUrl}/password/email`, data);
    }

    public resetPassword(data: any): Observable<any> {
        return this.http.post(`${environment.backendUrl}/password/reset`, data);
    }

    public logout(): Observable<any> {
        return this.http.post(`${environment.backendUrl}/logout`, {});
    }
}
