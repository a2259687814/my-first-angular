import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocalServiceComponent } from './local-service/local-service.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalServiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

