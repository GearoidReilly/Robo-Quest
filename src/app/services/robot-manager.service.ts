import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

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

  constructor() { }
}
