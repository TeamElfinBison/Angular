import { NotificatorService } from './../../core/notificator/notificator.service';
import { User } from './../../models/User';
import { UsersDataService } from './../users-data/users-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-all-users',
    templateUrl: './all-users.component.html',
    styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
    public users: User[];

    constructor(
        private readonly usersDataService: UsersDataService,
        private readonly notificator: NotificatorService) { }

    ngOnInit() {
        this.usersDataService.getAllUsers()
            .subscribe(response => this.users = response.data[0],
            (err) => this.notificator.showError(JSON.parse(err._body).message));
    }
}
