import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from './employee.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  employeeModel: EmployeeModel = new EmployeeModel();
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
  saveEmployee() {

    this.employeeModel.firstName = this.formValue.value.firstName;
    this.employeeModel.lastName = this.formValue.value.lastName;
    this.employeeModel.email = this.formValue.value.email;
    this.employeeModel.cell = this.formValue.value.cell;
    this.employeeModel.cell = this.formValue.value.salary;

    this.api.epmployeePost(this.employeeModel)
      .subscribe(res => {
        console.log(res);

        alert("Employee added")
        this.formValue.reset();
        this.getAll();

      },
        err => { alert("Data Not Save") })
  }
  getAll() {
    this.api.getAllEmployee()
      .subscribe(res => {
        this.employeeData = res;
      })
  }







}