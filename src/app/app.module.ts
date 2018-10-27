import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoDreiDComponent } from './logo-drei-d/logo-drei-d.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoDreiDComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
