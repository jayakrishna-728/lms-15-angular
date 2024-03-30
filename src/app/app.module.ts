import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { ContentComponent } from './content/content.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CoursesCardComponent } from './courses/courses-card/courses-card.component';
import { PreviewComponent } from './preview/preview.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { JourneyComponent } from './journey/journey.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeLearningHubComponent } from './home-learning-hub/home-learning-hub.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CareersComponent } from './careers/careers.component';
import { DetailsComponent } from './courses/details/details.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    CoursesCardComponent,
    ContentComponent,
    FormComponent,
    HomeComponent,
    PreviewComponent,
    AboutComponent,
    ServicesComponent,
    JourneyComponent,
    HomeLearningHubComponent,
    TestimonialsComponent,
    BlogsComponent,
    CareersComponent,
    DetailsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
