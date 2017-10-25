import { Component, OnInit } from '@angular/core';
import {Task} from '../shared/models/task.model';
import {TodoFormService} from './todo-form.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  public tasks: Task[];

  constructor(private service: TodoFormService) { }

  ngOnInit() {
    this.tasks = this.service.getTasks();
  }

}
