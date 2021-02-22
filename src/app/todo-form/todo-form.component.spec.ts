import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {

  let formComponent: TodoFormComponent
  beforeEach(() => {
    formComponent = new TodoFormComponent
  })

  it('should create form with two controls', () => {
    expect(formComponent.form.contains('name')).toBeTruthy();
    expect(formComponent.form.contains('email')).toBeTruthy();
  });

  it('should make the name control required', () => {
    let control = formComponent.form.get('name')
    control.setValue('')
    expect(control.valid).toBeFalsy();
  });
});
