import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StudentsComponent } from './students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentFormComponent } from './student-form/student-form.component';

//guards
import { StudentsDeactivateGuard } from './../guards/students-deactivate.guard';
import { StudentsGuard } from './../guards/students.guard';

//resolver
import { StudentDetailResolver } from './guards/student-detail.resolver';

const studentsRoutes = [
    {path: '', component: StudentsComponent, 
     canActivateChild: [StudentsGuard],
     children : [
        {path: 'new', component: StudentFormComponent},
        {path: ':id', component: StudentDetailComponent,
            resolve: { student : StudentDetailResolver }
        },
        {path: ':id/edit', component: StudentFormComponent,
            canDeactivate: [StudentsDeactivateGuard]
        }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(studentsRoutes)],
    exports: [RouterModule]
})
export class StudentsRoutingModule {}