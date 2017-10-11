import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentsComponent } from './students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';

import { StudentsRoutingModule } from './students.routing.module';

//guards
import { StudentsDeactivateGuard } from './../guards/students-deactivate.guard';

//resolver
import { StudentDetailResolver } from './guards/student-detail.resolver';

//services
import { StudentsService } from './students.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StudentsRoutingModule
    ],
    exports: [],
    declarations: [
        StudentsComponent, 
        StudentDetailComponent,
        StudentFormComponent
    ],
    providers: [
        StudentsService,
        StudentsDeactivateGuard,
        StudentDetailResolver
    ],
})
export class StudentsModule { }