import { Component, OnInit } from '@angular/core';
import {Task} from '../shared/models/task.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  public tasks: Task[] = [{title: 'Rene is typing somewhat well!'}, {title: 'Chase is a good teacher!'}];

  constructor() { }

  ngOnInit() {
  }

}
