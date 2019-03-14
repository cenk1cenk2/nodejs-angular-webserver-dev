/*
 * File: home.module.ts
 * Project: \src\app\home\home.module.ts
 * -------------------------
 * File Created: 20181227
 * Author: Cenk Kılıç (cenk1cenk2cenk3@gmail.com)
 * -------------------------
 * Last Modified: 01:41, 20181229
 * Modified By: Cenk Kılıç (cenk1cenk2cenk3@gmail.com>)
 * -------------------------
 * Changelog:
 * Date      	By	Rev		Comments
 * ----------	---	---		---------------------------------------------------------
 * 20181227		CK	v0.1    Initial Version
 */

// angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// component imports
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
// module router
import { HomeRouting } from './home.routing.module';
// plugin imports

@NgModule({
    imports: [
        CommonModule,
        HomeRouting
  ],
    declarations: [
        HomeComponent,
        MainComponent
    ],
})

export class HomeModule { }
