import {NgModule} from '@angular/core';
import {CreationFormComponent} from './components/creationForm/creationForm.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../routing/routing.module';
import {CreationFormService} from './components/creationForm/creationForm.service';

@NgModule({
  declarations: [CreationFormComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  exports: [CreationFormComponent],
  providers: [CreationFormService]
})
export class TeacherModule{}
