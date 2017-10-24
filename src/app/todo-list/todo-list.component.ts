import { Component, OnInit } from '@angular/core';
import {Task} from '../shared/models/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public tasks: Task[] = [{title: 'Rene is typing somewhat well!'}, {title: 'Chase is a good teacher!'}];
  constructor() { }

  ngOnInit() {
  }

}
