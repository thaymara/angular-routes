import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Student } from './../student';
import { StudentsService } from './../students.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  private student: Student;
  private inscricao: Subscription;
  private changedForm: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.student = this.studentsService.getStudent(id);
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe;
  }

  onInput(){
    this.changedForm = true;
  }

  canChangeRoute(){
    if(this.changedForm){
      confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
  }

  canDesactivate(){
    return this.canChangeRoute();
  }

}
