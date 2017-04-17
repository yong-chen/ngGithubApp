import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { GithubService } from './services/github.service';

import { ProfileComponent } from './components/profile.component';
import { AppComponent }  from './app.component';
//import { jqxButtonComponent } from '../jqwidgets-ts/angular_jqxbuttons';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ ProfileComponent, AppComponent ],
  providers:    [ GithubService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
