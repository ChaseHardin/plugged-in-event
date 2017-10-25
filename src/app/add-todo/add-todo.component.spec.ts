import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoComponent } from './add-todo.component';
import {FormsModule} from '@angular/forms';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a new task', () => {
    spyOn(component.newTask, "emit");

    const newTask: string = 'Jon looks great in a bow tie!';

    fixture.componentInstance.task = newTask;

    fixture.nativeElement.querySelector('[name=add-task]').click();

    fixture.detectChanges();

    expect(component.newTask.emit).toHaveBeenCalledWith(newTask);
  });
});
