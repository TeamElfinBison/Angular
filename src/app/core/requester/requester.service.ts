import { User } from './../../models/User';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequesterService {

    constructor(private readonly http: Http) { }

    getUsers() {
        return this.http
            .get('http://localhost:1234/api/users')
            .map(res => res.json());
    }

    registerUser(user: User) {
        return this.http
            .post('http://localhost:1234/api/register', user)
            .map(res => res.json());
    }
}
