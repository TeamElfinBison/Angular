import { RequesterService } from './../../core/requester/requester.service';
import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public user: User;

    constructor(private readonly requester: RequesterService) { }

    ngOnInit() {
        this.user = new User();

    }

    loginUser() {
        this.requester.loginUser(this.user)
            .subscribe((response: Response) => {
                // handle response
                console.log(response);
            });
    }
}
