import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 baseUrl : string ="http://localhost:3000/posts";

  constructor(private http:HttpClient) { }

epmployeePost(data : any){
return this.http.post<any>(this.baseUrl,data)
.pipe(map(res=>{return res;})
)}


getAllEmployee(){
  return this.http.get<any>(this.baseUrl).pipe(map(res=>{return res;}))
}

}
