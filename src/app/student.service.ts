import { Student } from './student';
import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private httpOptions={
       headers:new HttpHeaders(
           {
               'content-type':'application/json'
           }
       )
   } 
 requestUrl="http://localhost:3000/studentlist"
  constructor(private http:HttpClient) { }

  getinformation(){
   return this.http.get(this.requestUrl);
  }
  addNewRecord(student:Student){
   return this.http.post(this.requestUrl,student,this.httpOptions);
  }
}
