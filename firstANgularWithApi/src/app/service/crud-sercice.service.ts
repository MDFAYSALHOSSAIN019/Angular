import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudSerciceService {

  baseUrl : string ="http://localhost:8083/api/department";

  constructor(private http:HttpClient) { }


getAllDepartment(){

  return this.http.get<any>(this.baseUrl).pipe(map(res=>{return res;}))
}

 
}
