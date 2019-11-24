import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RobotDBService} from '../services/robot-db.service';
import {RobotManagerService} from '../services/robot-manager.service';

@Component({
  selector: 'app-create-robot',
  templateUrl: './create-robot.component.html',
  styleUrls: ['./create-robot.component.css']
})
export class CreateRobotComponent implements OnInit {

  selectedJob: string;      //Get selected Job value
  selectedTeam: string;     //Get selected Team value

  //Array of available jobs
  jobs: string[];

  //Array of available teams
  teams: string[];

  constructor(private roboRoute: RobotDBService, private roboManager: RobotManagerService) { }

  ngOnInit() {
    //Get the list of jobs from the Robot Manager Service
    this.jobs = this.roboManager.jobs;
    //Get the list of teams from the Robot Manager Service
    this.teams = this.roboManager.teams;
  }

  //Function to add a robot, accessed from the form
  AddRobot(form: NgForm){
    //Access the add robot function of the RobotDBService and pass the form values in
    this.roboRoute.AddRobot(form.value.name, this.selectedJob, this.selectedTeam).subscribe();

    //Reset the form
    form.resetForm();
  }

}
