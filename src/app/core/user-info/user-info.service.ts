import { Injectable } from '@angular/core';
import { CookieService } from '../cookie/cookie.service';

@Injectable()
export class UserInfoService {
    constructor(private readonly cookieService: CookieService) { }

    isLoggedUser(): boolean {
        return !!this.cookieService.getCookie('token');
    }

    getUserUsername(): string {
        return this.cookieService.getCookie('username');
    }
}
