import { CookieService } from './../cookie/cookie.service';
import { RequesterService } from './../../core/requester/requester.service';
import { Headers } from '@angular/http';
import { User } from './../../models/User';
import { Injectable } from '@angular/core';

@Injectable()
export class UserAuthService {
    constructor(
        private readonly requester: RequesterService,
        private readonly cookieService: CookieService) { }

    isLoggedUser(): boolean {
        return !!this.cookieService.getCookie('token');
    }

    getUserUsername(): string {
        return this.cookieService.getCookie('username');
    }

    registerUser(user: User) {
        return this.requester.post('/register', user);
    }

    loginUser(user: User) {
        return this.requester.post('/login', user);
    }

    logoutUser(header: { token: string }) {
        const headers = new Headers(header);
        return this.requester.post('/logout', null, headers);
    }
}
