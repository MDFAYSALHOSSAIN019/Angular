import { Component, OnInit } from '@angular/core';
import { ApiResponse, CrudApi } from '../../model/restCrud.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudSerciceService } from '../../service/crud-sercice.service';

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



  constructor(private crudService:CrudSerciceService , private formBuilder: FormBuilder) {
   

  }


  editItemId: any | null = null;

  openEditModal(item: any) {
    this.editItemId = item.id;
    // Populate the form with the selected item's data
    this.formValue.patchValue({
      name: item.name,
      gender: item.gender
    });
    // Open the modal
    // You may need to trigger the modal opening based on your modal library
  }


  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      gender: ['']
      
    });
   this.getAllDepartment();

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
    this.ngOnInit();
  });
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

