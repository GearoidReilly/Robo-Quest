import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRobotComponent } from './edit-robot.component';

describe('EditRobotComponent', () => {
  let component: EditRobotComponent;
  let fixture: ComponentFixture<EditRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
