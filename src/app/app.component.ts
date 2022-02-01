import { Goal } from './goal';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Goals';
  goals: Goal[] =[
    {id:1, name:'watch finding Nemo '},
    {id:2, name: 'Buy cookies'},
    {id:3, name:'get new Phone case'},
    {id:4, name :'Get dogs food'},
    {id:5, name: 'Solve math problem'},
    {id:6, name :'Plot my world domination plan'}
  ];
}


