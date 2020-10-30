import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DePaginatorModule} from 'de-paginator';
import { PaginatorComponent } from './paginator/paginator.component';
@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    DePaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
