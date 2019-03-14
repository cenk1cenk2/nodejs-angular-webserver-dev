/*
 * File: app.routing.module.ts
 * Project: \src\app\app.routing.module.ts
 * -------------------------
 * File Created: 20181227
 * Author: Cenk Kılıç (cenk1cenk2cenk3@gmail.com)
 * -------------------------
 * Last Modified: 01:42, 20181229
 * Modified By: Cenk Kılıç (cenk1cenk2cenk3@gmail.com>)
 * -------------------------
 * Changelog:
 * Date      	By	Rev		Comments
 * ----------	---	---		---------------------------------------------------------
 * 20181227		CK	v0.1  Initial version.
 */

// @angular modules
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  // otherwise redirect to home
  { path: '**', redirectTo: 'root' }
];

export const AppRouting = RouterModule.forRoot(appRoutes);
