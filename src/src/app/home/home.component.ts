/*
 * File: home.component.ts
 * Project: \src\app\home\home.component.ts
 * -------------------------
 * File Created: 20181213
 * Author: Cenk Kılıç (cenk1cenk2cenk3@gmail.com)
 * -------------------------
 * Last Modified: 01:25, 20181231
 * Modified By: Cenk Kılıç (cenk1cenk2cenk3@gmail.com>)
 * -------------------------
 * Changelog:
 * Date      	By	Rev	Comments
 * ----------	---	---	---------------------------------------------------------
 * 20181218		CK	0   Initial version.
 */

import { Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { Router } from '@angular/router';
import { User } from '../models/auth.user';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../auth/user.service';
import { NavigationMenu } from '../config.json';
declare var $: any;

@Component({
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    navigationMenu: Object;

    constructor(
        private router: Router,
        private authenticationService: AuthService,
        private userService: UserService,
    ) {
        // get current user from authenticationService
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });

        this.navigationMenu = NavigationMenu;
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        $.getScript('../../assets/js/main.js');
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers();
        });
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }

    buildNavigationMenu() {

    }
}
