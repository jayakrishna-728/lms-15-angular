import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  changeBackground:any=false;

  constructor( private activatedRoute: ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    // let currentRoute = this.router.url;
    // console.log(currentRoute);
    // if(currentRoute.includes("contact")){
    //   this.changeBackground=true;
    // } else if(currentRoute.includes("about")){
    //   this.changeBackground=true;
    // }
  

  }


  // Function to redirect to the specified social media platform
 redirectToSocialMedia(platform: string) {
  let url: string;

  // Determine the URL based on the platform
  switch (platform) {
      case 'linkedin':
          url = 'https://www.linkedin.com/in/iev-technologies/'; // Replace with your LinkedIn URL
          break;
      case 'youtube':
          url = 'https://www.youtube.com/@ievtechnologies'; // Replace with your YouTube URL
          break;
      case 'instagram':
          url = 'https://www.instagram.com/iev_tech/?igsh=MTI4bjAxYXY3aGlzZA%3D%3D'; // Replace with your Instagram URL
          break;
      default:
          console.error('Invalid platform:', platform);
          return;
  }

      // Redirect to the URL
      window.location.href = url;
}


}
