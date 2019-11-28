import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class RobotManagerService {

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
  ];

  constructor(private snackBar: MatSnackBar) { }

  //Function to display a snackbar
  openSnackBar(message: string, action: string) {
    //Display the snackbar with the message and the action text
    this.snackBar.open(message, action, {
      //How long should the snackbar stay on screen for?
      duration: 3000,
    });
  }
}
