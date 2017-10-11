import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseNotFindComponent } from './courses/course-not-find/course-not-find.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: 'courses', component: CoursesComponent },
    { path: 'courses/:id', component: CourseDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'notFind', component: CourseNotFindComponent },
    { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);