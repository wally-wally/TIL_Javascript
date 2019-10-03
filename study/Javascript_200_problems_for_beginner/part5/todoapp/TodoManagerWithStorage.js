class TodoManagerWithStorage extends TodoManager {
  static get STORAGE_KEY() {
    return "TODO-APP";
  }

  constructor() {
    const todoJSON = 
      localStorage.getItem(TodoManagerWithStorage.STORAGE_KEY);
    const todos = (todoJSON) ? JSON.parse(todoJSON) : [];
    super(todos)
  }

  addTodo(contents, done = false) {
    const newTodo = super.addTodo(contents, done);
    const original = newTodo.toggle;
    newTodo.toggle = () => {
      original.apply(newTodo);
      this.saveToLocalStorage();
    }
    this.saveToLocalStorage();
    return newTodo;
  }

  saveToLocalStorage() {
    const todoJSON = JSON.stringify(this._todos);
    localStorage.setItem(
      TodoManagerWithStorage.STORAGE_KEY, 
      todoJSON);   
  }
}