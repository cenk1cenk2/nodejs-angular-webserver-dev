/*
 * File: login.routing.module.ts
 * Project: \src\app\login\login.routing.module.ts
 * -------------------------
 * File Created: 20181228
 * Author: Cenk Kılıç (cenk1cenk2cenk3@gmail.com)
 * -------------------------
 * Last Modified: 02:17, 20181228
 * Modified By: Cenk Kılıç (cenk1cenk2cenk3@gmail.com>)
 * -------------------------
 * Changelog:
 * Date      	By	Rev		Comments
 * ----------	---	---		---------------------------------------------------------
 * 20181228		CK	v0.1    Initial version
 */

// angular imports
import { Routes, RouterModule } from '@angular/router';
// template
// components
import { LoginComponent } from './login.component';

const componentRoutes: Routes = [
    { path: 'login', component: LoginComponent }
];

export const FrontpageRouting = RouterModule.forChild(componentRoutes);
