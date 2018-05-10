import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ContentComponent} from './content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [HttpModule, BrowserModule, FormsModule],
  exports: [ContentComponent],
  providers: []
})
export class ContentModule {

}
