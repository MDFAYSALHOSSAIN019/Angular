import { Component, OnInit } from '@angular/core';
import { CrudApi } from '../../model/restCrud.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudSerciceService } from '../../service/crud-sercice.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent implements OnInit{

  crudApi: CrudApi = new CrudApi;
  formValue !: FormGroup;



  crudData: any;



  constructor(private api:CrudSerciceService , private formBuilder: FormBuilder) {

   

  }


  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      department: ['']
      
    });
   this.getAllDep();

  }
  getAllDep() {
    this.api.getAllDepartment()
      .subscribe(res => {
        this.crudData = res;
      })
  }



  
}

