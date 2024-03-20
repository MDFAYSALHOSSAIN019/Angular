import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../../service/departmentservice.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{


  formValue: FormGroup;
  departments: any[] = [];

  constructor(
    private fb: FormBuilder,
    private departmentComboService: DepartmentService
  ) {
    this.formValue = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      department: ['', Validators.required],
    });
  }

  // ngOnInit(): void {
  //   // Subscribe to department combo data changes
  //   this.departmentComboService.saveDep.subscribe((departments) => {
  //     console.log('Departments:', departments);
  //     this.departments = departments;
  //   });
  // }



  ngOnInit(): void {
    // Call the method to get departments
    this.departmentComboService.getAllDep().subscribe(
      (departments) => {
        console.log('Departments:', departments);
        this.departments = departments;
      },
      (error) => {
        console.error('Error loading departments', error);
      }
    );
  }
  saveAndReload() {
    // Implement your save logic here
    // Example: call a service to save data
    // this.someService.saveData(this.formValue.value).subscribe(
    //   (response) => {
    //     console.log('Data saved successfully', response);
    //     this.ngOnInit(); // Reload data after saving
    //   },
    //   (error) => {
    //     console.error('Error saving data', error);
    //   }
    // );

    // For demonstration, just log the form value
    console.log('Form Value:', this.formValue.value);
  }


}


