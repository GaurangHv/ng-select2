import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select2Module } from 'ng2-select2';

import { AppComponent } from './app.component';
import { Select2Component } from './select2/select2.component';

@NgModule({
  declarations: [
    AppComponent,
    Select2Component
  ],
  imports: [
    BrowserModule,
    Select2Module,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
