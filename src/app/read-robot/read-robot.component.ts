import { Component, OnInit } from '@angular/core';
import {RobotDBService} from '../services/robot-db.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-robot',
  templateUrl: './read-robot.component.html',
  styleUrls: ['./read-robot.component.css']
})
export class ReadRobotComponent implements OnInit {

  robots: any = [];     //Robots found from the database

  //Connect to the Router service
  constructor(private roboRoute: RobotDBService) { }

  ngOnInit() {
     //Makes an asynchronous call
     this.roboRoute.GetRobots().subscribe((data) => {
      //Return data from the web service
      this.robots = data.robots;
      console.log(this.robots);
    })
  }

  //Delete a robot from the database
  DeleteRobot(id: string){
    //Use the service to delete the robot from the database
    this.roboRoute.DeleteRobot(id).subscribe(
      //Adds asynchronous functionality
      () =>{
        //Add functionality to refresh the page automatically
        this.ngOnInit();
      }
    )
  }

}
