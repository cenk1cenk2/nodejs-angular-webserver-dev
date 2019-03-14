/*
 * File: customfunc.helper.ts
 * Project: \src\app\helpers\customfunc.helper.ts
 * -------------------------
 * File Created: 20181218
 * Author: Cenk Kılıç (cenk1cenk2cenk3@gmail.com)
 * -------------------------
 * Last Modified: 00:32, 20181218
 * Modified By: Cenk Kılıç (cenk1cenk2cenk3@gmail.com>)
 * -------------------------
 * Changelog:
 * Date      	By	Rev	Comments
 * ----------	---	---	---------------------------------------------------------
 * 20181218		CK	0   This typescript will contain very commonly used functions.
 */
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomFuncts {
    // custom function for delay
    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
