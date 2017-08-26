import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequesterService {

    constructor(private readonly http: Http) { }

    getUsers() {
        return this.http
            .get('localhost:1234/api/users')
            .map(res => res.json());
    }
}
