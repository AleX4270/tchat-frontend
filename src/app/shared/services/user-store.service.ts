import { Injectable } from '@angular/core';
import { CryptoService } from './crypto.service';
import { USER_STORAGE_KEY } from '../../app.const';
@Injectable({
    providedIn: 'root'
})
export class UserStoreService {

    private userInitialState = {
        name: '',
        token: ''
    };

    constructor(
        private readonly cryptoService: CryptoService,  
    ) {

    }

    public saveUser(data: any): void {
        localStorage.setItem(USER_STORAGE_KEY, this.cryptoService.encrypt(JSON.stringify(data)).toString());
    }

    public getUser(): any {
        const user = localStorage.getItem(USER_STORAGE_KEY);
        if(!user) {
            this.setInitialUserState();
            return this.userInitialState;
        }
        
        try {
            return JSON.parse(this.cryptoService.decrypt(user).toString());
        }
        catch(error) {
            console.error('User storage data has been corrupted. Log out immediately!');
            this.setInitialUserState();
            return this.userInitialState;
        }
    }

    public clearUser(): void {
        this.setInitialUserState();
    }

    private setInitialUserState(): void {
        localStorage.removeItem(USER_STORAGE_KEY);
        localStorage.setItem(USER_STORAGE_KEY, this.cryptoService.encrypt(JSON.stringify(this.userInitialState)));
    }
    
}
