import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(public http: HttpClient,private apiService: AppService){
  }
  formData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    description: ''
  };

  submitForm() {
    console.log('Form data:', this.formData);
    // Make the HTTP POST request
    this.apiService.postData(this.formData).subscribe((response: any) => {
      console.log(response);
    });
  }
}
