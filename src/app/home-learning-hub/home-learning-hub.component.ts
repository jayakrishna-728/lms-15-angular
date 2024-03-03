import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-learning-hub',
  templateUrl: './home-learning-hub.component.html',
  styleUrls: ['./home-learning-hub.component.scss']
})
export class HomeLearningHubComponent {


  constructor(private router: Router){

  }


  clickOnServices() { 
      this.router.navigateByUrl('/ievlearning');
  }
}
