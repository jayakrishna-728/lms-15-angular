import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.scss']
})
export class CoursesCardComponent implements OnInit {
  @Input() courseData: any;

  constructor(private router: Router, public courseService: CourseService) { }

  ngOnInit(): void {
  }

  readMore(course:any){
    this.router.navigateByUrl('/ievlearning/details');
    this.courseService.currentCourse=course;

  }

}
