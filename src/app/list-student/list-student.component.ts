import { StudentService } from './../student.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  postList:Student[];

  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.studentService.getinformation().subscribe(
      (result)=>{
        this.postList=result.posts;
      }
    );
  }

}
