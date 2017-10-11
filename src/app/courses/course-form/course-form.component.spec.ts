import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseForComponent } from './course-for.component';

describe('CourseForComponent', () => {
  let component: CourseForComponent;
  let fixture: ComponentFixture<CourseForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
