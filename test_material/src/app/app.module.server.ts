import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
      Component,
    FormBuilder,
    FormsModule,
    ReactiveFormsModule,
    Observable,
    // startWith,
    // map,
    AsyncPipe,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
