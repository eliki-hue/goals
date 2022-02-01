import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goals: Goal[] =[
    {id:1, name:'watch finding Nemo '},
    {id:2, name: 'Buy cookies'},
    {id:3, name:'get new Phone case'},
    {id:4, name :'Get dogs food'},
    {id:5, name: 'Solve math problem'},
    {id:6, name :'Plot my world domination plan'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
