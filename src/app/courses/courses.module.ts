import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseNotFindComponent } from './course-not-find/course-not-find.component';
import { CoursesService } from './courses.service';
import { CoursesRoutingModule } from './courses.routing.module';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
    imports: [
        CommonModule,
        CoursesRoutingModule
        //RouterModule
    ],
    exports: [],
    declarations: [
        CoursesComponent,
        CourseDetailComponent,
        CourseNotFindComponent,
        CourseFormComponent
    ],
    providers: [CoursesService],
})
export class CoursesModule { }