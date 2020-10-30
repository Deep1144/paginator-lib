import { NgModule } from '@angular/core';
import { DePaginatorComponent } from './de-paginator.component';
import { BrowserModule } from '@angular/platform-browser'



@NgModule({
  declarations: [DePaginatorComponent],
  imports: [
    BrowserModule
  ],
  exports: [DePaginatorComponent]
})
export class DePaginatorModule { }
