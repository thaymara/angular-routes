import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFindComponent } from './page-not-find/page-not-find.component';

//Guards
import { CoursesGuard } from './guards/courses.guard';
import { StudentsGuard } from './guards/students.guard';
import { AuthGuard } from './guards/auth.guard';

//Modules
import { AppRoutingModule } from './app.routing.module';

//Services
import { AuthService } from './login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthService, 
    AuthGuard,
    CoursesGuard,
    StudentsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }