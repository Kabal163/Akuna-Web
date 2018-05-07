import {NgModule} from "@angular/core";
import {LogoutComponent} from "./components/logout/logout.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {LogoComponent} from "./components/logo/logo.component";
import {NavigationComponent} from "./components/navigation/navigation.component";

@NgModule({
  declarations: [LogoutComponent, LogoComponent, NavigationComponent],
  imports: [HttpModule, BrowserModule, FormsModule],
  exports: [LogoutComponent, LogoComponent, NavigationComponent],
  providers: []
})
export class HeaderModule {

}
