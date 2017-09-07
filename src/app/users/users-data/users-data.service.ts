import { CookieService } from './../../core/cookie/cookie.service';
import { HttpHeaders } from '@angular/common/http';
import { RequesterService } from './../../core/requester/requester.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersDataService {

    constructor(private readonly requester: RequesterService) { }

    getAllUsers() {
        return this.requester.get('/api/users');
    }

    getCurrentUserInfo(token: string) {
        const headers = new HttpHeaders().set('token', token);
        return this.requester.get('/api/currentUser', headers);
    }
}
