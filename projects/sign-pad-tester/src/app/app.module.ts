import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SignPadModule } from "projects/sign-pad-lib/src/lib/sign-pad.module"; // for dev
// import { SignPadModule } from 'ngx-sign-pad';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SignPadModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
