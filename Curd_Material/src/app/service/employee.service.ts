import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService  {

 baseUrl  ='http://localhost:3000/posts';

  constructor(private _http : HttpClient ) { }

  empPost(data : any){
return this._http.post<any>(this.baseUrl,data).pipe(map(res =>{return res;}))

  }
  getAllEmp(){
    return this._http.get<any>(this.baseUrl).pipe(map(res =>{return res;}))
  }
  deleteEmp(id : number){
return this._http.delete<any>(this.baseUrl+id).pipe(map(res =>{return res;}))
  }
editEmp(row:any, id :number){
  return this._http.put<any>(this.baseUrl+id,row).pipe(map(res =>{return res;}))
}
}
