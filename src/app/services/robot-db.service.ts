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

  //Add Robot to the database
  AddRobot(name:string, job:string, team:string):Observable<any>{
    //Create robot model to import to the database
    const newRobot:Robot = {name:name, job:job, team:team};

    //Send the robot data to the server
    return this.http.post("http://localhost:3000/robots",newRobot);
  }
}
