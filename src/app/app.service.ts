import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private showContactFormSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public showContactForm$: Observable<boolean> = this.showContactFormSubject.asObservable();

  constructor(private http: HttpClient) { }

  navigateContactForm() {
    this.showContactFormSubject.next(!this.showContactFormSubject.value);
  }

  navigateHome(){
    this.showContactFormSubject.next(false);
  }
   postData(user:any): Observable<any> {
    const url = 'https://lms-backend-drab.vercel.app/userdata';
    // return this.http.post(url, user);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, user, { headers });
  }
  


}
