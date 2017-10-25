import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../shared/models/task.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() tasks: Task[];

  constructor() { }

  ngOnInit() {
  }

}
