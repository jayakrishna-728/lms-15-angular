import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CareersComponent } from './careers/careers.component';
import { DetailsComponent } from './courses/details/details.component';

const routes: Routes = [
  { path: '', component: HomeComponent} ,
  { path: 'home', component: HomeComponent} ,
  { path: 'contactus' , component:FormComponent},
  { path: 'about' , component:AboutComponent},
  { path: 'ievlearning', component: CoursesComponent},
  { path: 'ievlearning/details', component: DetailsComponent},
  { path: 'blog' , component:BlogsComponent},
  { path: 'careers', component: CareersComponent},
  // { path: 'ievlearning', component: ServicesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
