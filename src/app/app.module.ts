import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateRobotComponent } from './create-robot/create-robot.component';
import { ReadRobotComponent } from './read-robot/read-robot.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRobotComponent,
    ReadRobotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
