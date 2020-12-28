import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MultByPipe} from './pipes/mult-by.pipe';
import {FormsModule} from '@angular/forms';
import { Filter } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    MultByPipe,
    Filter
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
