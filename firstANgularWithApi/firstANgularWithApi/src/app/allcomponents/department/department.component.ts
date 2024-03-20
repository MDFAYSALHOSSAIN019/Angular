import { Component, OnInit } from '@angular/core';
import { ApiResponse, CrudApi } from '../../model/restCrud.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudSerciceService } from '../../service/crud-sercice.service';
import { DepartmentService } from '../../service/departmentservice.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'] // Fix the typo here
})

export class DepartmentComponent implements OnInit{



  crudApi?: CrudApi = new CrudApi;
  formValue !: FormGroup;

  departments?: CrudApi[]=[];

  crudData: any;



  constructor(private crudService:CrudSerciceService , private departmentService: DepartmentService, private formBuilder: FormBuilder) {
   

  }


  editItemId: any | null = null;

  openEditModal(item: any) {
    this.editItemId = item.id;
    // Populate the form with the selected item's data
    this.formValue.patchValue({
      name: item.name,
      gender: item.gender

    });
    
  }

  // private loadDepartments() {
  //   this.departmentService.getAllDep().subscribe(
  //     data => this.departments = data,
  //     error => console.error('Error fetching departments', error)
  //   );
  // }
  private loadDepartments() {
    this.departmentService.getAllDep().subscribe(
      data => this.departments = data,
      error => console.error('Error fetching departments', error)
    );
  }
  


  ngOnInit(): void {
    
  this.initEmployeeForm();
   this.getAllDepartment();
   this.loadDepartments();

  }
  private initEmployeeForm(){
    this.formValue = this.formBuilder.group({

      name: ['',Validators.required],
      gender: ['',Validators.required],         
      department: ['', Validators.required] 
      
    });

  }





  // getAllDepartment() {
  //   this.crudService.getAllDepartment().subscribe({
  //     next: (response) => {
  //       this.departments = response.data;
  //     },      
  //   });
  // }


  getAllDepartment() {
    this.crudService.getAllDepartment().subscribe(res => {this.crudData = res; })
  }

saveDepartment() {
  const formData = this.formValue.value;

  this.crudService.saveDepartment(formData).subscribe(res => {
     this.crudData = res;
    
  });
}

saveAndReload() {
  this.saveDepartment();
  this.ngOnInit();
}

deleteAndReload(id: any) {
  this.crudService.deleteDepartment(id).subscribe(() => {
   
  });
  this.ngOnInit();
}
editDepartment(id:any,data:any){

  this.crudService.editDepartment(id,data).subscribe()
}



// deleteDep(id: any) {
//   this.crudService.deleteDepartment(id).subscribe(() => {
   
//     this.ngOnInit(); 
//   });
// }


  // getAllDepartment(){
  //   this.crudService.getAllDepartment().subscribe({
  //     next: (response) => {
  //       this. departments= response.data;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching departments:', error);      
  //     },
  //   });
  // }



  


  // getAllDepartment() {
  //   this.crudService.getAllDepartment().subscribe({
  //     next: (response) => {
  //       this.departments = response.data;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching departments:', error);
  //     },
  //   });
  // }

  
}

