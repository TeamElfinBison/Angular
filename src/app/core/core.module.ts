import { AuthGuardService } from './auth-guard/auth-guard.service';
import { UserInfoService } from './user-info/user-info.service';
import { CookieService } from './cookie/cookie.service';
import { NotificatorService } from './notificator/notificator.service';
import { RequesterService } from './requester/requester.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
    providers: [
        RequesterService,
        NotificatorService,
        CookieService,
        UserInfoService,
        AuthGuardService
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parent: CoreModule) {
        if (parent) {
            throw new Error('Core module is already provided!');
        }
    }
}
