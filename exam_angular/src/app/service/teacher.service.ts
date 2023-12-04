import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
baseUrl="http://localhost:3000";

  constructor(private http : HttpClient) { }
  teacherPost(data: any){
    return this.http.post<any>(this.baseUrl,data).pipe(map (res=> {return res;}))
  }

  teacherGet()
}
