import {NgModule} from '@angular/core';
import {AuthComponent} from '../../components/auth/auth.component';
import {AdminComponent} from './admin.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

let routing = RouterModule.forChild([
  {path: "", component: AdminComponent}
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [AdminComponent]
})
export class AdminModule
{

}
