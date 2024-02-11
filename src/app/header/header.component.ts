import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private sharedService: AppService) { }

  homeActive:any=false;
  isAboutUs:any=false;
  isCourses:any=false;
  isServices:any=false;
  isContactus:any=false;
  mobileSubmenu:any=false;
  isLearningHub:any=false;

  ngOnInit(): void {
    setTimeout(()=>{
      let currentRoute = this.router.url;
      console.log(currentRoute);
      if(currentRoute.includes("contact")){
        this.isContactus=true;
        this.homeActive=false;
        this.isAboutUs=false;
        this.isCourses=false;
        this.isServices=false;
        this.mobileSubmenu=false;
      } else if(currentRoute.includes("home")){
        this.homeActive=true;
        this.isContactus=false;
        this.isAboutUs=false;
        this.isCourses=false;
        this.isServices=false;
        this.mobileSubmenu=false;
      } else if(currentRoute.includes("courses")){
        this.homeActive=false;
        this.isContactus=false;
        this.isAboutUs=false;
        this.isCourses=true;
        this.isServices=false;
        this.mobileSubmenu=false;
      } else if(currentRoute.includes("services")){
        this.homeActive=false;
        this.isContactus=false;
        this.isAboutUs=false;
        this.isCourses=false;
        this.isServices=true;
        this.mobileSubmenu=false;
      } else if(currentRoute.includes("about")){
        this.homeActive=false;
        this.isContactus=false;
        this.isAboutUs=true;
        this.isCourses=false;
        this.isServices=false;
        this.mobileSubmenu=false;
      }
    } , 1000)
     
  }


  openContactForm(){
    this.router.navigateByUrl('/contactus');
    this.isContactus=true;
    this.homeActive=false;
    this.isAboutUs=false;
    this.isCourses=false;
    this.isServices=false;
    this.mobileSubmenu=false;
  }


  navigateHome(){
    this.router.navigateByUrl('/home');
    this.isContactus=false;
    this.homeActive=true;
    this.isAboutUs=false;
    this.isCourses=false;
    this.isServices=false;
    this.mobileSubmenu=false;
  }

  navigateAboutus(){
    this.router.navigateByUrl('/about');
    this.isAboutUs=true;
    this.isContactus=false;
    this.homeActive=false;
    this.isCourses=false;
    this.isServices=false;
    this.mobileSubmenu=false;
  }

  navigateCourses(){
    this.router.navigateByUrl('/ievlearning');
    this.isAboutUs=false;
    this.isContactus=false;
    this.homeActive=false;
    this.isCourses=true;
    this.isServices=false;
    this.mobileSubmenu=false;
  }


  navigateBlog(){
    this.router.navigateByUrl('/blog');
  }
  navigateCareers(){
    this.router.navigateByUrl('/careers');
  }


  navigateServices(){
    this.router.navigateByUrl('/ievlearning');
    this.isAboutUs=false;
    this.isContactus=false;
    this.homeActive=false;
    this.isCourses=false;
    this.isServices =true;
    this.mobileSubmenu=false;
  }



  openSubmenu(){
    this.mobileSubmenu=true;
  }
  closeSubMenu(){
    this.mobileSubmenu=false;
  }

  navigate(element: string){
    if(element =='courses'){
      this.isCourses=true;
      this.isAboutUs=false;
      this.homeActive=false;
      this.isServices=false;
      this.isContactus=false;
    } else if(element == 'testimonials'){
      this.isServices=true;
      this.isCourses=false;
      this.isAboutUs=false;
      this.homeActive=false;
      this.isContactus=false;
    }
    if(document.getElementById(element)!=null){
      document.getElementById(element)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
    }
  }
}
