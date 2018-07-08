import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HeaderModule} from './modules/header/header.module';
import {SidebarModule} from './modules/sidebar/sidebar.module';
import {TeacherModule} from './modules/teacher/teacher.module';
import {HttpClientModule} from '@angular/common/http';
import {AdministratorModule} from './modules/administrator/administrator.module';
import {LoginComponent} from './components/login.component';
import {AppRoutingModule} from './modules/routing/routing.module';
import {CallService} from './services/call.service';
import {GetTokenService} from './services/getToken.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HeaderModule,
    SidebarModule,
    TeacherModule,
    AdministratorModule,
    AppRoutingModule
  ],
  providers: [CallService, GetTokenService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
