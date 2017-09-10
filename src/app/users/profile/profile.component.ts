import { CookieService } from './../../core/cookie/cookie.service';
import { User } from './../../models/User';
import { NotificatorService } from './../../core/notificator/notificator.service';
import { UsersDataService } from './../users-data/users-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    public currentUser: User;

    constructor(
        private readonly usersDataService: UsersDataService,
        private readonly notificator: NotificatorService) { }

    ngOnInit() {
        this.currentUser = new User();

        this.usersDataService.getCurrentUserInfo()
            .subscribe(response => this.currentUser = response['data'][0],
            (err) => this.notificator.showError(err.error.message));
    }

}
