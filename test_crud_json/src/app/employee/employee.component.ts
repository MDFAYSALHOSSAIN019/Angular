import { Component,OnInit} from '@angular/core';
import { EmployeeModel } from './employee.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit   {
  employeeModel : EmployeeModel=new EmployeeModel();
  formValue !: FormGroup;

  employeeData: any;



  constructor(private api: ApiService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      cell: [''],
      salary: [''],

    });

    this.getAll();

  }
}