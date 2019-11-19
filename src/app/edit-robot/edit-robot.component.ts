import { Component, OnInit } from '@angular/core';
import {RobotDBService} from '../services/robot-db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-edit-robot',
  templateUrl: './edit-robot.component.html',
  styleUrls: ['./edit-robot.component.css']
})
export class EditRobotComponent implements OnInit {

  robot:any = [];   //Robot to edit

  //Add router, activated route and robot db services to the constructor
  constructor(private router: Router, private route: ActivatedRoute, private roboRoute: RobotDBService) { }

  ngOnInit() {
    //Get the robot from the database based its id
    this.roboRoute.GetRobotById(this.route.snapshot.params['id']).subscribe((data) =>
    {
      //Get the data from the robot
      this.robot = data;
      console.log(this.robot._id);
    })
  }

  //Take the form data and use it to update the robot in the database
  EditRobot(form: NgForm){
    //Add each form value to the service
    this.roboRoute.EditRobot(this.robot._id, form.value.name, form.value.job, form.value.team).subscribe();

    //Redirect the user to the read page
    this.router.navigate(['/read']);
  }

}
