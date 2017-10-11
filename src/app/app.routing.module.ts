import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesGuard } from './guards/courses.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFindComponent } from './page-not-find/page-not-find.component';

//Guards
import { StudentsGuard } from './guards/students.guard';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
    { path: 'courses', 
        loadChildren: 'app/courses/courses.module#CoursesModule',
        canActivate: [AuthGuard],
        canActivateChild: [CoursesGuard],
        canLoad: [AuthGuard]
    },
    { path: 'students',
        loadChildren: 'app/students/students.module#StudentsModule',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent,
        canActivate: [AuthGuard] 
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFindComponent } //, canActivate: [AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}