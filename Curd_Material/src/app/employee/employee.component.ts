import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  EmpFrom : FormGroup;
  subject : String[]=[

    'JEE',
    'html',
    'angular',
    'bootstrap',
    
  ]
  constructor(private _fb : FormBuilder){
    this.EmpFrom =this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      Subject :'',

    })
  }
}
