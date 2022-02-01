import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goals: Goal[] =[
    new Goal(1, 'Watch finding', 'find an online version '),
    new Goal(2, 'going to the market', 'buy cabbages'),
    new Goal (3, 'reading novel', 'the lost island'),
    new Goal(4, 'doing assignment', 'angular content'),
    new Goal (5, 'exercise', 'physical'),
    new Goal(6, 'sleeping',"2 hours")

  ];
  toggleDetails(index: number){
    this.goals[index].showDescription= !this.goals[index].showDescription;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
