import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './service/employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Curd_Material';
  constructor(private _dialog: MatDialog,private _empService :EmployeeService){}
  
  openAddEditEmpForm(){
    this._dialog.open(EmployeeComponent);
  }
  ngOnInit(): void {
    // this.getEmpList().subscribe
  }
  getEmpList(){
    this._empService.getAllEmp().subscribe({
      next :(res) =>{
        console.log(res)
      },
      error : (err)=>{
        console.log(err)
      }
    })
  }

}
