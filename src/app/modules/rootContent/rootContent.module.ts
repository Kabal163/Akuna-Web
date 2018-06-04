import {NgModule} from '@angular/core';
import {ContentComponent} from './components/content/content.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../routing/routing.module';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule],
  exports: [ContentComponent],
  providers: []
})
export class RootContentModule{}
