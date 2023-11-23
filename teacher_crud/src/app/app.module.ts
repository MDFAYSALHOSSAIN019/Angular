import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,provideHttpClient,withFetch } from '@angular/common/http';
import{    BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

  ],
  providers: [
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
