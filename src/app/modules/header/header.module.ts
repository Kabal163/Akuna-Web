import {NgModule} from "@angular/core";
import {AccountComponent} from "./components/account/account.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {LogoComponent} from "./components/logo/logo.component";
import {NavigationComponent} from "./components/navigation/navigation.component";

@NgModule({
  declarations: [AccountComponent, LogoComponent],
  imports: [HttpModule, BrowserModule, FormsModule],
  exports: [AccountComponent, LogoComponent],
  providers: []
})
export class HeaderModule {

}
