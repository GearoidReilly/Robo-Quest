import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RobotDBService} from '../services/robot-db.service';

@Component({
  selector: 'app-create-robot',
  templateUrl: './create-robot.component.html',
  styleUrls: ['./create-robot.component.css']
})
export class CreateRobotComponent implements OnInit {

  selectedJob: string;      //Get selected Job value
  selectedTeam: string;     //Get selected Team value

  //Array of available jobs
  jobs: string[] = [
    "Warrior",
    "Rogue",
    "Cleric",
    "Mage",
    "Monk",
    "Paladin",
    "Bard",
    "Berserker"
  ];

  //Array of available teams
  teams: string[] = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
  ]

  constructor(private roboRoute: RobotDBService) { }

  ngOnInit() {
  }

  //Function to add a robot, accessed from the form
  AddRobot(form: NgForm){
    //Access the add robot function of the RobotDBService and pass the form values in
    this.roboRoute.AddRobot(form.value.name, this.selectedJob, this.selectedTeam).subscribe();

    //Reset the form
    form.resetForm();
  }

}
