import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  baseUrl:string="http://localhost:8083/api/dep";

  constructor(private http:HttpClient ) { }

// getAllDep(){
//   return this.http.get<any>(this.baseUrl)
//     .pipe(map(res=>{
//       return res;
//     }))

// }

// saveDep(data:any){
//   return this.http.post<any>(this.baseUrl, data)
//     .pipe(map(res=>{
//       return res;
//     }))
// }

// getAllDep() {
//   return this.http.get<any>(this.baseUrl)
//     .pipe(
//       map(res => res),
//       catchError(error => {
//         console.error('Error fetching departments', error);
//         // Handle the error or rethrow it
//         throw error;
//       })
//     );
// }

getAllDep(): Observable<any[]> {
  return this.http.get<any[]>(this.baseUrl)
    .pipe(
      map(res => res),
      catchError(error => {
        console.error('Error fetching departments', error);
        throw error;
      })
    );
}



saveDep(data: any) {
  return this.http.post<any>(this.baseUrl, data)
    .pipe(
      map(res => res),
      catchError(error => {
        console.error('Error saving department', error);
        // Handle the error or rethrow it
        throw error;
      })
    );
}

// private departmentsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
//   public departments$: Observable<any[]> = this.departmentsSubject.asObservable();
//   private loadDepartments() {
//     this.departmentComboService.getAllDep().pipe(
//       catchError((error) => {
//         console.error('Error loading departments', error);
//         throw error; // rethrow the error for further handling
//       })
//     ).subscribe((departments) => {
//       this.departmentsSubject.next(departments);
//     });
//   }

}
