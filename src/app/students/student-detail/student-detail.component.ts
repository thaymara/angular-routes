import { StudentsService } from './../students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  private student: Student;
  private inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentsService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.data.subscribe(
      (info: {student: Student}) => {
        this.student = info.student;
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe;
  }

  editContact(){
    this.router.navigate(['/students', this.student.id, 'edit']);
  }

}
