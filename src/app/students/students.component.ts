import { Component, OnInit } from '@angular/core';

import { Student } from './student';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  private students: Student[] = [];
  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.students = this.studentsService.getStudents();
  }

}
