import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRobotComponent } from './create-robot/create-robot.component';
import { ReadRobotComponent } from './read-robot/read-robot.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatSelectModule
  } from '@angular/material';
import { EditRobotComponent } from './edit-robot/edit-robot.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchRobotComponent } from './search-robot/search-robot.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRobotComponent,
    ReadRobotComponent,
    EditRobotComponent,
    HomePageComponent,
    SearchRobotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
