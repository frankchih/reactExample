

const {
  InputField,
  TodoHeader,
  TodoList
} = window.App;

class TodoApp extends React.Component {

  constructor(props, context) {
    super(props, context)
    
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    fetch('./todos.json')
      .then((response) => response.json())
      .then((todos) => this.setState({ todos }))
  }

  updateTodosBy(updateFn){
    return (...args) => {
      this.setState({
        todos: updateFn(this.state.todos, ...args)
      })
    }
  }

  render() {
    const { todos } = this.state;
    
    return (
      <div>
        <TodoHeader
          title="我的待辦清單"
          username="Jason"
          todoCount={todos.filter((todo) => !todo.completed).length}
        />
        <InputField 
          placeholder="新增待辦清單"
          onSubmitEditing={this.updateTodosBy(_createTodo)} 
        />
        <TodoList 
          todos={todos}
          onDeleteTodo={this.updateTodosBy(_deleteTodo)}
          onToggleTodo = {this.updateTodosBy(_toggleTodo)}
          onUpdateTodo = {this.updateTodosBy(_updateTodo)}
        />
      </div>
    );
  }
}

const _createTodo = (todos, title) => {
  todos.push({
    id: todos[todos.length - 1 ].id + 1, 
    title, 
    completed: false
  }); 
  return todos;
}

const _updateTodo = (todos, id, title) => {
  const target = todos.find((todo) => todo.id === id);
  if (target){
    target.title = title;
  }
  return todos;
}

const _deleteTodo = (todos, id) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  if (idx !== -1 ){
    todos.splice(idx, 1);
  }
  return todos;
}

const _toggleTodo = (todos, id, completed) => {
  const target = todos.find((todo) => todo.id === id);
  if (target){
    target.completed = completed; 
  }
  return todos;
}


window.App.TodoApp = TodoApp;