/*
 * File: home.routing.module.ts
 * Project: \src\app\home\home.routing.module.ts
 * -------------------------
 * File Created: 20181227
 * Author: Cenk Kılıç (cenk1cenk2cenk3@gmail.com)
 * -------------------------
 * Last Modified: 01:43, 20181229
 * Modified By: Cenk Kılıç (cenk1cenk2cenk3@gmail.com>)
 * -------------------------
 * Changelog:
 * Date      	By	Rev		Comments
 * ----------	---	---		---------------------------------------------------------
 * 20181228		CK	v0.2  Fixed routing and added the frame nodes as child.
 * 20181227		CK	v0.1    Initial version.
 */

// angular imports
import { Routes, RouterModule } from '@angular/router';
// authentication service
import { AuthGuard } from '../auth/auth.guard';
// template
import { HomeComponent } from './home.component';
// components
import { MainComponent } from './main/main.component';

const componentRoutes: Routes = [
  {
    path: 'root',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [{ path: '', component: MainComponent }]
  }
];

export const HomeRouting = RouterModule.forChild(componentRoutes);
