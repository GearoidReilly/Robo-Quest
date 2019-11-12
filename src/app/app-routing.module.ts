import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateRobotComponent} from './create-robot/create-robot.component';
import {ReadRobotComponent} from './read-robot/read-robot.component';

const routes: Routes = [
  {
    path: 'read',
    component: ReadRobotComponent
  },
  {
    path: 'create',
    component: CreateRobotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
