import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../routing/routing.module';
import {FormsModule} from '@angular/forms';
import {AdminCreationFormComponent} from './components/creationForm/adminCreationForm.component';
import {AdminCreationFormService} from './components/creationForm/adminCreationForm.service';

@NgModule({
  declarations: [AdminCreationFormComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  exports: [AdminCreationFormComponent],
  providers: [AdminCreationFormService]
})
export class AdministratorModule {

}
