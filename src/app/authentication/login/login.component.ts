import { RequesterService } from './../../core/requester/requester.service';
import { User } from './../../models/User';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public user: User;

    constructor(
        private readonly requester: RequesterService,
        private readonly toastr: ToastsManager,
        private readonly vcr: ViewContainerRef,
        private readonly router: Router) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.user = new User();
    }

    loginUser() {
        this.requester.loginUser(this.user)
            .subscribe((response) => {
                this.toastr
                    .success(response.message, 'Success!')
                    .then(() => this.router.navigateByUrl('/'));
            },
            (err) => this.toastr.error(err, 'Error!'));
    }
}
