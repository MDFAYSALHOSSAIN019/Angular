import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, map } from 'rxjs';
import { ApiResponse, CrudApi } from '../model/restCrud.model';

@Injectable({
  providedIn: 'root'
})
export class CrudSerciceService {

  baseUrl: string = "http://localhost:8083/api/department";

  constructor(private http: HttpClient) { }

getAllDepartment(){ return this.http.get<any>(this.baseUrl).pipe(map(res=>{return res;}))
}

saveDepartment(data:any){ return this.http.post<any>(this.baseUrl,data).pipe(map(res=>{return res;}))
}

deleteDepartment(id: any) {
  return this.http.delete<any>(`${this.baseUrl}/${id}`);
}

editDepartment(id: any, data: any) {
  // const url = `${this.baseUrl}/${id}`;
  // return this.http.put<any>(this.baseUrl+""+"id", data);
  return this.http.put<any>(`${this.baseUrl}/${id}`, data);
}


  // getAllDepartment(): Observable<ApiResponse<CrudApi[]>> {
  //   return this.http.get<ApiResponse<CrudApi[]>>(`${this.baseUrl}`);
  // }

// getAllDepartment(): Observable<ApiResponse<CrudApi[]>>{

//   return this.http.get<ApiResponse<CrudApi[]>>('${this.baseUrl}');
// }





// getAllDepartment(): Observable<any> {
//   const url = `${this.baseUrl}`; // Adjust the endpoint accordingly
//   return this.http.get(url);
// }



}
