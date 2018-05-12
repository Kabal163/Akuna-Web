import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HeaderModule} from "./modules/header/header.module";
import {SidebarModule} from './modules/sidebar/sidebar.module';
import {ContentModule} from './modules/content/сontent.module';
import {AppRoutingModule} from './modules/routing/routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeaderModule,
    SidebarModule,
    ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
