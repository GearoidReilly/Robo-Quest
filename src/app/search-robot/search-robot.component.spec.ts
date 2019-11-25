import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRobotComponent } from './search-robot.component';

describe('SearchRobotComponent', () => {
  let component: SearchRobotComponent;
  let fixture: ComponentFixture<SearchRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
