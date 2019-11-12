import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRobotComponent } from './read-robot.component';

describe('ReadRobotComponent', () => {
  let component: ReadRobotComponent;
  let fixture: ComponentFixture<ReadRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadRobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
