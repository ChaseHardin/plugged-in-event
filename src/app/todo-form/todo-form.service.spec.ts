import { TestBed, inject } from '@angular/core/testing';

import { TodoFormService } from './todo-form.service';

describe('TodoFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoFormService]
    });
  });

  it('should be created', inject([TodoFormService], (service: TodoFormService) => {
    expect(service).toBeTruthy();
  }));

  it('should return task data',  inject([TodoFormService], (service: TodoFormService)=> {
    service.tasks = [{title: 'Rene is typing some what well!'}, {title: 'Chase is a good teacher!'}];
    const actual = service.getTasks();
    expect(actual[0].title).toEqual(service.tasks[0].title);
  }));
});
