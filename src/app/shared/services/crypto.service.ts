import { Injectable } from '@angular/core';
import { STORAGE_ENCRYPTION_KEY } from '../../app.const';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

    encrypt(value: string): string {
        return CryptoJS.AES.encrypt(value, STORAGE_ENCRYPTION_KEY).toString();
    }

    decrypt(value: string): string {    
        const decryptedBytes = CryptoJS.AES.decrypt(value, STORAGE_ENCRYPTION_KEY);
        return decryptedBytes.toString(CryptoJS.enc.Utf8);
    }
}
