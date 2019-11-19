import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateRobotComponent} from './create-robot/create-robot.component';
import {ReadRobotComponent} from './read-robot/read-robot.component';
import { EditRobotComponent} from './edit-robot/edit-robot.component'

const routes: Routes = [
  {
    path: 'read',
    component: ReadRobotComponent
  },
  {
    path: 'create',
    component: CreateRobotComponent
  },
  {
    path: 'edit/:id',
    component: EditRobotComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
