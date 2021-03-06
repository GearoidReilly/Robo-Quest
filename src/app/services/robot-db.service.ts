import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Robot} from '../robot-model';

@Injectable({
  providedIn: 'root'
})
export class RobotDBService {

  //Add Http Client to constructor to access routing features
  constructor(private http: HttpClient) { }

  //Recieve Robots from the database
  GetRobots():Observable<any>{
    //Returns the robot data information
    return this.http.get("http://localhost:3000/robots");
  }

  //Find one robot with an id
  GetRobotById(id:string):Observable<any>{
    //Return a robot found by ID
    return this.http.get("http://localhost:3000/robots/" + id);
  }

  //Find robots by job
  GetRobotsByJob(job:string):Observable<any>{
    //Return a list of robots by job
    return this.http.get("http://localhost:3000/robots/search/" + job);
  }

  //Add Robot to the database
  AddRobot(name:string, job:string, team:string, health:number, magic:number, attack:number, defense:number,
    speed:number, intelligence:number):Observable<any>{
    //Create robot model to import to the database
    const newRobot:Robot = {name:name, job:job, team:team, health:health, magic:magic,
      attack:attack, defense:defense, speed:speed, intelligence:intelligence};

    //Send the robot data to the server
    return this.http.post("http://localhost:3000/robots",newRobot);
  }

  //Remove a robot from the database
  DeleteRobot(id:string):Observable<any>{
    //Return a server request while adding the id to the server request
    return this.http.delete("http://localhost:3000/robots/" + id);
  }

  //Edit the data of a robot on the database
  EditRobot(id:string, name:string, job:string, team:string, health:number, magic:number,
    attack:number, defense:number, speed:number, intelligence:number):Observable<any>{
    //Create a robot constant using the added values
    const robot:Robot = {name:name, job:job, team:team, health:health, magic:magic,
      attack:attack, defense:defense, speed:speed, intelligence:intelligence};

    //Update the robot on the database
    return this.http.put("http://localhost:3000/robots/" + id, robot);
  }
}
