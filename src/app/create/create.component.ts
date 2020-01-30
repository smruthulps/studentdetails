import { StudentService } from './../student.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 studentDetails:Student= {} as Student
  constructor(private studentservice:StudentService) { }

  ngOnInit() {
   
  }
newRecord(){
  console.log(this.studentDetails)
  this.studentservice.addNewRecord(this.studentDetails).subscribe(
    (result)=>{
      console.log(result)
    }
  )
  
}
}
