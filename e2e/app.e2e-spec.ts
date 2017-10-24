import { AppTodoListPage } from './app.po';

describe('app-todo-list App', () => {
  let page: AppTodoListPage;

  beforeEach(() => {
    page = new AppTodoListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
