import { User } from './../../models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RequesterService {
    private REQUEST_DOMAIN = 'http://localhost:1234';

    constructor(private readonly http: HttpClient) { }

    get(resource: string, headers?: HttpHeaders) {
        return this.http.get(this.REQUEST_DOMAIN + resource, { headers });
    }

    post(resource: string, body: any, headers?: HttpHeaders) {
        return this.http.post(this.REQUEST_DOMAIN + resource, body, { headers });
    }

    put(resource: string, body: any, headers?: HttpHeaders) {
        return this.http.put(this.REQUEST_DOMAIN + resource, body, { headers });
    }
}
