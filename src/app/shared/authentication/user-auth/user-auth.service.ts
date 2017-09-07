import { HttpHeaders } from '@angular/common/http';
import { RequesterService } from './../../../core/requester/requester.service';
import { User } from './../../../models/User';
import { Injectable } from '@angular/core';

@Injectable()
export class UserAuthService {
    constructor(private readonly requester: RequesterService) { }

    registerUser(user: User) {
        return this.requester.post('/api/register', user);
    }

    loginUser(user: User) {
        return this.requester.post('/api/login', user);
    }

    logoutUser(token: string) {
        const headers = new HttpHeaders().set('token', token);

        return this.requester.post('/api/logout', null, headers);
    }
}
