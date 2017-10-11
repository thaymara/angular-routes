import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  getCourses(){
    return [
      {id: 1, name: 'Angular 2'},
      {id: 2, name: 'Java'}
    ]
  }

  getCourse(id:number){
    let courses = this.getCourses();
    for(let i=0; i<courses.length; i++){
      let course = courses[i];
      if(course.id == id){
        return course;
      }
    }
    return null;
  }

}
