import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ConsoleBarComponent } from './console-bar/console-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    ConsoleBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
