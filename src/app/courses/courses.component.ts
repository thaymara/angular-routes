import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any = [];
  page: number;
  inscricao: Subscription;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.page = queryParams['page'];
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  nextPage(){
    //this.pagina++;
    this.router.navigate(['/courses'], 
      {queryParams: {'page': ++this.page}});
  }

}
