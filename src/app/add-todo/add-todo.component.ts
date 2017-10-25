import {Component, EventEmitter, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  public task: string;
  @Output() newTask: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public addTask(): void {
    this.newTask.emit(this.task);
  }

}
