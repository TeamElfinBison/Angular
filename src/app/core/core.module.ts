import { RequesterService } from './requester/requester.service';
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
    providers: [
        RequesterService
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parent: CoreModule) {
        if (parent) {
            throw new Error('Core module is already provided!');
        }
    }
}
