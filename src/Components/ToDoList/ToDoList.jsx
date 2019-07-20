import React, {Component} from "react";
import './ToDoList.scss'
import TodoItem from "../ToDoItem/ToDoItem";
import todosData from "../../Data/TodosData"

class ToDoList extends Component {

  constructor() {
    super()
    this.state = {
      todos: todosData,
    }
  }

  onChangeCompleted = (id) => {
    console.log(id)
    this.setState(prevState => {
      const updateTodos = prevState.todos.map((todo, index) => {
        if (index === id) {
          todo.completed = !todo.completed
        }
        return todo
      })

      return {
        todos: updateTodos
      }
    })
  }

  onDeleteItem = (id) => {
    const todos = this.state.todos;
    todos.splice(id, 1)
    this.setState( {
      todos
    })
  }


  render() {
    const TodoItems = this.state.todos.map((item, index) => {
      return <TodoItem key={index} index={index} item={item}  onChangeCompleted={this.onChangeCompleted} onDeleteItem={this.onDeleteItem}/>
    })
    return (
      <div className="todo-list">
        {TodoItems}
      </div>
    )
  }

}

export default ToDoList