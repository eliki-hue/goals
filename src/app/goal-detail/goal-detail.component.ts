import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal! :Goal
  @Output()iscomplete = new EventEmitter<boolean>();

  goalDelete(complete:boolean){
    this.iscomplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
