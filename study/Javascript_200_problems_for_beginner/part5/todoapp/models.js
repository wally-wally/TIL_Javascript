class Todo {
  constructor(contents, done) {
    this.contents = contents;
    this.done = done;
  }
  toggle() {
    this.done = !this.done;
  }
}

class TodoManager {
  constructor(todos = []) {
    this._todos = [];
    todos.forEach(todo => {
      this.addTodo(todo.contents, todo.done);
    });
  }

  addTodo(contents, done = false) {
    const newTodo = new Todo(contents, done);
    this._todos.push(newTodo);
    return newTodo;
  }

  getList() {
    return this._todos;
  }

  get leftTodoCount() {
    return this._todos.reduce((p, c) => {
      if (c.done === false) {
        return ++p;
      } else {
        return p;
      }
    }, 0);
  }
}