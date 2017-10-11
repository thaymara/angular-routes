import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseNotFindComponent } from './course-not-find/course-not-find.component';

const coursesRoutes: Routes = [
    { path: '', component: CoursesComponent },
    { path: 'notFind', component: CourseNotFindComponent },
    { path: ':id', component: CourseDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(coursesRoutes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule {}