import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLearningHubComponent } from './home-learning-hub.component';

describe('HomeLearningHubComponent', () => {
  let component: HomeLearningHubComponent;
  let fixture: ComponentFixture<HomeLearningHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLearningHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLearningHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
