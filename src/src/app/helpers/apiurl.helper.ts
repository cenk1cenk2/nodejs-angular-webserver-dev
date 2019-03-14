/*
 * File: apiurl.helper.ts
 * Project: \src\app\helpers\apiurl.helper.ts
 * -------------------------
 * File Created: 20181218
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
import { api } from '../config.json';

@Injectable({ providedIn: 'root' })
export class ApiUrl {
    constructor() {
    }

    build(endpoint: string) {
        let url = '';
        let current = api;
        const paths = endpoint.split('.');

        for (let i = 0; i <= paths.length; ++i) {
            if (current[paths[i]] === undefined) {
                if (typeof current === 'string' && endpoint !== 'root') {
                    url = url.concat(String(current));
                } else {
                    url = `apiurlbuild!err: ${endpoint} can not be reached or still has children.`;
                }
            } else {
                url = url.concat(current.root);
                current = current[paths[i]];
            }
        }
        return url;
    }
}
