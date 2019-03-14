/*
 * File: login.error.component.ts
 * Project: \src\app\login\login.error.component.ts
 * -------------------------
 * File Created: 20181218
 * Author: Cenk Kılıç (cenk1cenk2cenk3@gmail.com)
 * -------------------------
 * Last Modified: 15:38, 20181218
 * Modified By: Cenk Kılıç (cenk1cenk2cenk3@gmail.com>)
 * -------------------------
 * Changelog:
 * Date      	By	Rev	Comments
 * ----------	---	---	---------------------------------------------------------
 * 20181218		CK	0A  Fixed a bug where it does not clear the message after the initial time.
 * 20181218		CK	0   Initial version.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NotificationService } from '../services/notification.service';
import { CustomFuncts } from '../helpers/customfuncts.helper';

@Component({
    selector: 'app-alert',
    templateUrl: 'login.error.component.html'
})

export class LoginErrorComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;

    constructor(private notificationService: NotificationService,
        private customFuncts: CustomFuncts) { }

    ngOnInit() {
        this.subscription = this.notificationService.getMessage().subscribe(message => {
            this.message = message;
            this.customFuncts.delay(5000).then(() => {
                this.message = undefined;
            });
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
