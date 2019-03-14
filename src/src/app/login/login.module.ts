/*
 * File: login.module.ts
 * Project: \src\app\login\login.module.ts
 * -------------------------
 * File Created: 20181227
 * Author: Cenk Kılıç (cenk1cenk2cenk3@gmail.com)
 * -------------------------
 * Last Modified: 02:10, 20181228
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
import { LoginComponent } from './login.component';
import { LoginErrorComponent } from './login.error.component';
// module router
import { FrontpageRouting } from './frontpage.routing.module';
// plugin imports
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FrontpageRouting
  ],
    declarations: [
        LoginComponent,
        LoginErrorComponent
  ],
    exports: [
        LoginComponent,
        LoginErrorComponent
  ]
})

export class LoginModule { }
