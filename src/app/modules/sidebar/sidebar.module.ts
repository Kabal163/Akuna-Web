import {NgModule} from '@angular/core';
import {SidebarComponent} from './sidebar.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SidebarComponent],
  imports: [HttpModule, BrowserModule, FormsModule],
  exports: [SidebarComponent],
  providers: []
})
export class SidebarModule {

}
