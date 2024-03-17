import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public basicCourseList: Array<any> = [
    {
      img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Electric Vehicles ',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content. ',
      price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_ac1f7e7e38a44bd2ab92fb30b5fa38d7~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Smart Mobility Integration ',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
      price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'EV Design & Engineering ',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
      price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_a7cab894f28c483eaf093590691bf2f5~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Global EV Regulations and Policies ',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
      price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Battery Technology for Electric Vehicles ',
      description: '',
      price: '$100',
      duration: '4 weeks'
    },
  ];
  public intermediateCourseList: Array<any> = [
    {
      img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Electric Vehicles ',
      description: '',
      price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_ac1f7e7e38a44bd2ab92fb30b5fa38d7~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'EV Battery Simulation & Modeling ',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
      price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_2ed737b9f562470691056c62ffb8e47a~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'EV Design & Engineering ',
      description: '',
      price: '$100',
      duration: '4 weeks'
    },
  ];
  public advancedCourseList: Array<any> = [
    {
      img: 'https://static.wixstatic.com/media/fc7570_edede96df98b4bc5b8529d1846dac713~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'Introduction to Electric Vehicles ',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
      price: '$100',
      duration: '4 weeks'
    },
    {
      img: 'https://static.wixstatic.com/media/fc7570_ac1f7e7e38a44bd2ab92fb30b5fa38d7~mv2.jpg/v1/fill/w_410,h_243,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image-place-holder.jpg',
      title: 'EV Battery Simulation & Modeling ',
      description: 'This is placeholder text. To change this content, double-click on the element and click Change Content.',
      price: '$100',
      duration: '4 weeks'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
