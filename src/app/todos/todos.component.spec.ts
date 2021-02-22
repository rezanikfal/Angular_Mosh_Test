import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { EMPTY, of, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null)
    component = new TodosComponent(service)
  });

  it('should set todos property with the item returned from the server', () => {
    spyOn(service, "getTodos").and.callFake(() => {
      return of(1, 2, 3)
    })

    component.ngOnInit()
    expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos.length).toBe(3);
    expect(component.todos).toEqual([1, 2, 3]);
  });

  it('should call the server to save the changes when new item is added', () => {
    let spy = spyOn(service, "add").and.callFake(t => {
      return EMPTY
    })
    component.add()
    expect(spy).toHaveBeenCalled()
  });

  it('should add the new todo returned from the server', () => {
    let todo = { id: 1 }
    // let spy = spyOn(service, "add").and.callFake(t => {
    //   return of(todo)
    // })
    spyOn(service, "add").and.returnValue(of(todo))
    component.add()
    expect(component.todos).toContain(todo)
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1)
  });

  it('should set the message property if server returns error', () => {
    let error = 'Error from the server'
    spyOn(service, "add").and.returnValue(throwError(error))
    component.add()  
    expect(component.message).toBe(error)
  });

  it('should call the server to delete a todo if the user confirms', () => {
    spyOn(window, "confirm").and.returnValue(true)
    let spy = spyOn(service, "delete").and.returnValue(EMPTY)
    component.delete(1)  
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith(1)
  });

  it('should NOT call the server to delete a todo if the user cancels', () => {
    spyOn(window, "confirm").and.returnValue(false)
    let spy = spyOn(service, "delete").and.returnValue(EMPTY)
    component.delete(1)  
    expect(spy).not.toHaveBeenCalled()
    expect(spy).not.toHaveBeenCalledWith(1)
  });
});
