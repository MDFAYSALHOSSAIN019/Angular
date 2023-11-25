import { Component,OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

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
  // ngOnInit(): void {
  //   this.get();
  // }

  constructor(private _fb : FormBuilder,
     private _empService :EmployeeService, 
     private dialog :DialogRef <EmployeeComponent>){

    this.EmpFrom =this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      dob:'',
      gender:'',
      Subject :'',

    })
  }
  onFromSubmit(){
    if(this.EmpFrom.valid){
      this._empService.empPost(this.EmpFrom.value).subscribe({
          next:(val :any)=>{
          alert('emp are add in json');
          this.dialog.close();
          },
          error:(err : any)=>{
            console.error(err);
          },

      })
    }
  }





}
