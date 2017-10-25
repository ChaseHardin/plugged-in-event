import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {TodoFormService} from './todo-form/todo-form.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ TodoFormService ],
  bootstrap: [TodoFormComponent]
})
export class AppModule { }
