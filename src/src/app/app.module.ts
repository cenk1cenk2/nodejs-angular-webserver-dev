/*
 * File: app.module.ts
 * Project: \src\app\app.module.ts
 * -------------------------
 * File Created: 20181227
 * Author: Cenk Kılıç (cenk1cenk2cenk3@gmail.com)
 * -------------------------
 * Last Modified: 02:19, 20181228
 * Modified By: Cenk Kılıç (cenk1cenk2cenk3@gmail.com>)
 * -------------------------
 * Changelog:
 * Date      	By	Rev		Comments
 * ----------	---	---		---------------------------------------------------------
 * 20181227		CK	v0.2  Moved imports in to modules.
 * 20181218		CK	v0.1  Initial version.
 */

// angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// authentication interceptors
import { JwtInterceptor } from './auth/auth.jwt.interceptor';
import { ErrorInterceptor } from './auth/auth.error.interceptor';
// angular main app component
import { AppComponent } from './app.component';
// custom routing
import { AppRouting } from './app.routing.module';
// external modules
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting,
    LoginModule,
    HomeModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
