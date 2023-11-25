import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Curd_Material';
  constructor(private _dialog: MatDialog){}
  
  openAddEditEmpForm(){
    this._dialog.open(EmployeeComponent);
  }

}
