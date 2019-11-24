import { Component, OnInit } from '@angular/core';
import {RobotDBService} from '../services/robot-db.service';
import {RobotManagerService} from '../services/robot-manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-edit-robot',
  templateUrl: './edit-robot.component.html',
  styleUrls: ['./edit-robot.component.css']
})
export class EditRobotComponent implements OnInit {

  robot:any = [];   //Robot to edit

  selectedJob: string;      //Get selected Job value
  selectedTeam: string;     //Get selected Team value

  //Array of available jobs
  jobs: string[];

  //Array of available teams
  teams: string[];

  //Add router, activated route, robot Manager and robot db services to the constructor
  constructor(private router: Router, private route: ActivatedRoute, private roboRoute: RobotDBService, 
    private roboManager: RobotManagerService) { }

  ngOnInit() {
    //Get the available jobs from the robot manager service
    this.jobs = this.roboManager.jobs;
    //Get the available teams from the robot manager service
    this.teams = this.roboManager.teams;
    //Get the robot from the database based its id
    this.roboRoute.GetRobotById(this.route.snapshot.params['id']).subscribe((data) =>
    {
      //Get the data from the robot
      this.robot = data;
      
      //Set the values of the select form inputs based on the job and team values of the robot
      this.selectedJob = this.robot.job;
      this.selectedTeam = this.robot.team;
    })
  }

  //Take the form data and use it to update the robot in the database
  EditRobot(form: NgForm){
    //Add each form value to the service
    this.roboRoute.EditRobot(this.robot._id, form.value.name, this.selectedJob, this.selectedTeam).subscribe();

    //Redirect the user to the read page
    this.router.navigate(['/read']);
  }

}
