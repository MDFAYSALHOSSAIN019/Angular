import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { DepartmentComponent } from './allcomponents/department/department.component';
import { FormComponent } from './allcomponents/form/form.component';
import { HeaderComponent } from './allcomponents/header/header.component';
import { SideberComponent } from './allcomponents/sideber/sideber.component';
import { FooterComponent } from './allcomponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    FormComponent,
    HeaderComponent,
    SideberComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
