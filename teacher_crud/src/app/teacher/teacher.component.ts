import { Component, OnInit } from '@angular/core';
import { TeacherModel } from './teacher.model';
import { TeacherApiService } from '../services/teacher-api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css',
  standalone: true,
})
export class TeacherComponent implements OnInit {

  teacherModel: TeacherModel = new TeacherModel();

  formValue !: FormGroup;
  
  teacherData: any;

  constructor(private api_tea: TeacherApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      department: [''],
      gender: [''],
      gardening: [false],
      Fishing: [false],
      cycling: [false],
    });
    this.getAll();
  }

  saveTeacher() {
    this.teacherModel.name = this.formValue.value.name;
    this.teacherModel.department = this.formValue.value.deartment;
    this.teacherModel.gender = this.formValue.value.gender;
    this.teacherModel.hobby = this.formValue.value.hobby;
    this.api_tea.teacherPost(this.teacherModel)
      .subscribe(res => {
        console.log(res);
        alert("Teacher add in Json")
        this.formValue.reset();
        this.getAll();
      },
        err => {
          alert("Data are not save")
        })
  }
  getAll() {

    this.api_tea.getAllTeacher()
      .subscribe(res => {
        this.teacherData = res;
      })
  }

  deleteTeacher(row :any){
    this.api_tea.deleteTeacher(row.id)
    .subscribe(res => {
      console.log(res);
      alert("Teacher Delete in Json")
      this.formValue.reset();
      this.getAll();
    },
      err => {
        alert("Data are not delete")
      })

  }

  onEdit(row: any) {
    this.teacherModel.id = row.id;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['department'].setValue(row.department);
    this.formValue.controls['gender'].setValue(row.gender);
    this.formValue.controls['hobby'].setValue(row.hobby);

  }

  teacherEdit() {
    this.teacherModel.name = this.formValue.value.name;
    this.teacherModel.department = this.formValue.value.deartment;
    this.teacherModel.gender = this.formValue.value.gender;
    this.teacherModel.hobby = this.formValue.value.hobby;
    this.api_tea.teacherPost(this.teacherModel)
      .subscribe(res => {
        console.log(res);
        alert("Teacher Update in Json")
        this.formValue.reset();
        this.getAll();
      },
        err => {
          alert("Data are not save")
        })

  }

}

// import { Component, OnInit } from '@angular/core';
// import { TeacherModel } from './teacher.model';
// import { TeacherApiService } from '../services/teacher-api.service';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-teacher',
//   templateUrl: './teacher.component.html',
//   styleUrls: ['./teacher.component.css']
// })
// export class TeacherComponent implements OnInit {

//   teacherModel: TeacherModel = new TeacherModel();
//   formValue!: FormGroup;
//   teacherData: any;

//   constructor(private api_tea: TeacherApiService, private formBuilder: FormBuilder) { }

//   ngOnInit(): void {
//     this.formValue = this.formBuilder.group({
//       name: [''],
//       department: [''],
//       gender: [''],
//       gardening: [false],
//       Fishing: [false],
//       cycling: [false],
//     });
//     this.getAll();
//   }

//   saveTeacher() {
//     this.teacherModel.name = this.formValue.value.name;
//     this.teacherModel.department = this.formValue.value.department;
//     this.teacherModel.gender = this.formValue.value.gender;
//     this.teacherModel.hobby = {
//       gardening: this.formValue.value.gardening,
//       Fishing: this.formValue.value.Fishing,
//       cycling: this.formValue.value.cycling
//     };

//     this.api_tea.teacherPost(this.teacherModel)
//       .subscribe(res => {
//         console.log(res);
//         alert("Teacher add in Json");
//         this.formValue.reset();
//         this.getAll();
//       },
//       err => {
//         alert("Data are not saved");
//       });
//   }

//   getAll() {
//     this.api_tea.getAllTeacher()
//       .subscribe(res => {
//         this.teacherData = res;
//       });
//   }

//   onEdit(row: any) {
//     this.teacherModel.id = row.id;
//     this.formValue.controls['name'].setValue(row.name);
//     this.formValue.controls['department'].setValue(row.department);
//     this.formValue.controls['gender'].setValue(row.gender);
//     this.formValue.controls['gardening'].setValue(row.hobby.gardening);
//     this.formValue.controls['Fishing'].setValue(row.hobby.Fishing);
//     this.formValue.controls['cycling'].setValue(row.hobby.cycling);
//   }

//   teacherEdit() {
//     this.teacherModel.name = this.formValue.value.name;
//     this.teacherModel.department = this.formValue.value.department;
//     this.teacherModel.gender = this.formValue.value.gender;
//     this.teacherModel.hobby = {
//       gardening: this.formValue.value.gardening,
//       Fishing: this.formValue.value.Fishing,
//       cycling: this.formValue.value.cycling
//     };

//     this.api_tea.teacherPost(this.teacherModel)
//       .subscribe(res => {
//         console.log(res);
//         alert("Teacher Update in Json");
//         this.formValue.reset();
//         this.getAll();
//       },
//       err => {
//         alert("Data are not saved");
//       });
//   }
// }