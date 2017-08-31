import { NotificatorService } from './core/notificator/notificator.service';
import { Component, ViewContainerRef } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DialogService],
})
export class AppComponent {
    constructor(
        private readonly notificator: NotificatorService,
        private readonly vcr: ViewContainerRef) {
        this.notificator.init(vcr);
    }
}
