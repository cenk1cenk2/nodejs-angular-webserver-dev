/*
 * File: auth.user.ts
 * Project: \src\app\models\auth.user.ts
 * -------------------------
 * File Created: 20181213
 * Author: Cenk Kılıç (cenk1cenk2cenk3@gmail.com)
 * -------------------------
 * Last Modified: 23:42, 20181230
 * Modified By: Cenk Kılıç (cenk1cenk2cenk3@gmail.com>)
 * -------------------------
 * Changelog:
 * Date      	By	Rev	Comments
 * ----------	---	---	---------------------------------------------------------
 * 20181218		CK	0   Initial version.
 */

export class User {
    id: number;
    username: string;
    password: string;
    token?: string;
}
