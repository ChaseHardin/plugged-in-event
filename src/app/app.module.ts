import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import {TodoFormService} from './todo-form/todo-form.service';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ TodoFormService ],
  bootstrap: [TodoFormComponent]
})
export class AppModule { }
