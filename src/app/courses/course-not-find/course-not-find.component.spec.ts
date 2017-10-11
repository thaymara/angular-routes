import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNotFindComponent } from './course-not-find.component';

describe('CourseNotFindComponent', () => {
  let component: CourseNotFindComponent;
  let fixture: ComponentFixture<CourseNotFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseNotFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseNotFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
