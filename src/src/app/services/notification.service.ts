/*
 * File: notification.service.ts
 * Project: \src\app\services\notification.service.ts
 * -------------------------
 * File Created: 20181218
 * Author: Cenk Kılıç (cenk1cenk2cenk3@gmail.com)
 * -------------------------
 * Last Modified: 00:23, 20181218
 * Modified By: Cenk Kılıç (cenk1cenk2cenk3@gmail.com>)
 * -------------------------
 * Changelog:
 * Date      	By	Rev	Comments
 * ----------	---	---	---------------------------------------------------------
 * 20181218		CK	0   Initial version.
 */

import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;

    constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }

    private changescripting(message: string) {
        if (message.substring(message.length - 1) !== '.') {
            message = message.concat('.');
        }
        return message;
    }

    success(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        message = this.changescripting(message);
        this.subject.next({ type: 'success', text: message });
    }

    error(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        message = this.changescripting(message);
        this.subject.next({ type: 'error', text: message });
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
