import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HeaderModule} from './modules/header/header.module';
import {SidebarModule} from './modules/sidebar/sidebar.module';
import {AppRoutingModule} from './modules/routing/routing.module';
import {TeacherModule} from './modules/teacher/teacher.module';
import {RootContentModule} from './modules/rootContent/rootContent.module';
import {HttpClientModule} from '@angular/common/http';
import {AdministratorModule} from './modules/administrator/administrator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HeaderModule,
    SidebarModule,
    RootContentModule,
    TeacherModule,
    AdministratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
