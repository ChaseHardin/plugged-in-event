import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should bind a list of todo tasks', () => {
    let tasks = [{title: 'Rene is typing somewhat well!'}, {title: 'Chase is a good teacher!'}];

    fixture.componentInstance.tasks = tasks;

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('[name=tasks] li:nth-child(1)').textContent.trim()).toEqual(tasks[0].title);

  });
});
