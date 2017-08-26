import { RequesterService } from './../../core/requester/requester.service';
import { User } from './../../models/User';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

    registerUser() {
        this.requester.registerUser(this.user)
            .subscribe((response) => {
                this.toastr
                    .success(response.message, 'Success!')
                    .then(() => this.router.navigateByUrl('/login'));
            },
            (err) => this.toastr.error(err, 'Error!'));
    }
}
