import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HeaderModule} from './modules/header/header.module';
import {SidebarModule} from './modules/sidebar/sidebar.module';
import {AppRoutingModule} from './modules/routing/routing.module';
import {TeacherCreationModule} from './modules/teacherCreation/teacherCreation.module';
import {RootContentModule} from './modules/rootContent/rootContent.module';
import {HttpClientModule} from '@angular/common/http';

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
    TeacherCreationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
