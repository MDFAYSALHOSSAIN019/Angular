import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './allcomponents/form/form.component';
import { DepartmentComponent } from './allcomponents/department/department.component';
import { HeaderComponent } from './allcomponents/header/header.component';
import { SideberComponent } from './allcomponents/sideber/sideber.component';
import { FooterComponent } from './allcomponents/footer/footer.component';
const routes: Routes = [
  { path: '', component:  DepartmentComponent},
  { path: 'form', component: FormComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'sideber', component: SideberComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]

})
export class AppRoutingModule { }
