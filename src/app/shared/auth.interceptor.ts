import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserStoreService } from './services/user-store.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private readonly userStoreService: UserStoreService,
    ) {
        
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.userStoreService.getUser().token;

        const clonedRequest = request.clone({
            setHeaders: {
                Authorization: `Bearer ${authToken}`
            }
        });

        return next.handle(clonedRequest);
    }
}
