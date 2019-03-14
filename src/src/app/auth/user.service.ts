/*
 * File: user.service.ts
 * Project: \src\app\auth\user.service.ts
 * -------------------------
 * File Created: 20181212
 * Author: Cenk Kılıç (cenk1cenk2cenk3@gmail.com)
 * -------------------------
 * Last Modified: 01:07, 20181218
 * Modified By: Cenk Kılıç (cenk1cenk2cenk3@gmail.com>)
 * -------------------------
 * Changelog:
 * Date      	By	Rev	Comments
 * ----------	---	---	---------------------------------------------------------
 * 20181218		CK	0   Initial version.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/auth.user';
import * as config from '../config.json';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${config.api.root}`);
    }

    getById(id: number) {
        return this.http.get(`${config.api.root}`);
    }

    register(user: User) {
        return this.http.post(`${config.api.root}`, user);
    }

    update(user: User) {
        return this.http.put(`${config.api.root}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.api.root}`);
    }
}
