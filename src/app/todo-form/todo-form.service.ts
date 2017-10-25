import { Injectable } from '@angular/core';
import {Task} from '../shared/models/task.model';

@Injectable()
export class TodoFormService {
  public tasks: Task[] = [{title: 'Rene is typing some what well!'}, {title: 'Chase is a good teacher!'}];

  constructor() { }

  public getTasks(): Task[] {
    return this.tasks;
  }

}
