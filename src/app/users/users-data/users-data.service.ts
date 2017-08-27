import { RequesterService } from './../../core/requester/requester.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersDataService {

    constructor(private readonly requester: RequesterService) { }

    getAllUsers() {
        return this.requester.get('/users');
    }
}
