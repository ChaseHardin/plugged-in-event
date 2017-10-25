import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponent } from './todo-form.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TodoFormService} from './todo-form.service';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFormComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ TodoFormService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
