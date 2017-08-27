import { User } from './../../models/User';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequesterService {
    private REQUEST_DOMAIN = 'http://localhost:1234/api';

    constructor(private readonly http: Http) { }

    get(resource: string, headers?: Headers) {
        return this.http
            .get(this.REQUEST_DOMAIN + resource, { headers })
            .map(res => res.json());
    }

    post(resource: string, body: any, headers?: Headers) {
        return this.http
            .post(this.REQUEST_DOMAIN + resource, body, { headers })
            .map(res => res.json());
    }

    put(resource: string, body: any, headers?: Headers) {
        return this.http
            .put(this.REQUEST_DOMAIN + resource, body, { headers })
            .map(res => res.json());
    }
}
