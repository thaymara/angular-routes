import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { CoursesService } from './../courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  private id: number;
  private inscricao: Subscription;
  private course: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.course = this.coursesService.getCourse(this.id);

        if(this.course == null){
          this.router.navigate(['courses/notFind']);
        }
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe;
  }

}
