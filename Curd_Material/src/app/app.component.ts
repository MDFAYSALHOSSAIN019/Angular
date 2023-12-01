import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './service/employee.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  displayedColumns: string[] = [
     'id',
     'FirstName', 
     'LastName', 
     'email',
     'dob',
     'gender',
     'subject'
    ];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private _dialog: MatDialog,private _empService :EmployeeService){}
  
  openAddEditEmpForm(){
    this._dialog.open(EmployeeComponent);
  }
  ngOnInit(): void {
    this.getEmpList();
  }
  getEmpList(){
    this._empService.getAllEmpList().subscribe({
      next :(res) =>{
       this.dataSource =new MatTableDataSource(res);
       this.dataSource.sort=this.sort;
       this.dataSource.paginator=this.paginator;
      },
      error : (err)=>{
        console.log(err)
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



