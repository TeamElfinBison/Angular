import { RequesterService } from './../../core/requester/requester.service';
import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public user: User;

    constructor(private readonly requester: RequesterService) { }

    ngOnInit() {
        this.user = new User();
    }

    registerUser(ev) {
        this.requester.registerUser(this.user)
            .subscribe((response: Response) => {
                // handle response
            });
    }
}
