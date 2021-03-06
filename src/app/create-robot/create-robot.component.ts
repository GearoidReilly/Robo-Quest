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

  selectedJob: string;                //Get selected Job value
  selectedTeam: string;               //Get selected Team value
  selectHealth: number = 20;               //Get selected Health value
  selectMagic: number = 20;                //Get selected Magic value
  selectAttack: number = 10;               //Get selected Attack value
  selectDefense: number = 10;              //Get selected Defense value
  selectSpeed: number = 10;                //Get selected Speed value
  selectIntelligence: number = 10;         //Get selected Intelligence value

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

    if(!form.valid)
    {
      //Display a message telling the user that they need to enter the form properly
      this.DisplayMessage("Please complete the form.", "Ok");
      return;
    }

    //Access the add robot function of the RobotDBService and pass the form values in
    this.roboRoute.AddRobot(form.value.name, this.selectedJob, this.selectedTeam, this.selectHealth, this.selectMagic,
      this.selectAttack, this.selectDefense, this.selectSpeed, this.selectIntelligence).subscribe();

    //Display a message telling the user that a new robot was created
    this.DisplayMessage("Created robot: " + form.value.name, "Ok");

    //Reset the form
    form.resetForm();
  }
  
  //Function to access the snackbar function of the 
  DisplayMessage(message: string, action: string){
    //Opens the snackbar from the service
    return this.roboManager.openSnackBar(message, action);
  }
}
