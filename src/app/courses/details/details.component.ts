import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  course:any=null;
  constructor(private router: Router, public courseService: CourseService) { }

  ngOnInit(): void {
    this.course=this.courseService.currentCourse;
  }
  backCourses(){
    this.router.navigateByUrl('/ievlearning');
  }

}
