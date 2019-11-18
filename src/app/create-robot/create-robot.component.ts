import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RobotDBService} from '../services/robot-db.service';

@Component({
  selector: 'app-create-robot',
  templateUrl: './create-robot.component.html',
  styleUrls: ['./create-robot.component.css']
})
export class CreateRobotComponent implements OnInit {

  constructor(private roboRoute: RobotDBService) { }

  ngOnInit() {
  }

  //Function to add a robot, accessed from the form
  AddRobot(form: NgForm){
    //Access the add robot function of the RobotDBService and pass the form values in
    this.roboRoute.AddRobot(form.value.name, form.value.job, form.value.team).subscribe();

    //Log the results to test results
    console.log(form.value);
    console.log(form.value.name);

    //Reset the form
    form.resetForm();
  }

}
