import React, {Component} from "react";
import './ToDoList.scss'
import TodoItem from "../ToDoItem/ToDoItem";
import todosData from "../../Data/TodosData"

class ToDoList extends Component {

  constructor() {
    super()
    this.state = {
      todos: todosData,
      character: {}
    }
  }

  onChangeCompleted = (id) => {
    this.setState(prevState => {
      const updateTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })

      return {
        todos: updateTodos
      }
    })
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/1")
      .then(res => res.json())
      .then(data => {
        this.setState({
          character: data
        })
      })
  }

  render() {
    const TodoItems = todosData.map((item) => {
      return <TodoItem key={item.id} item={item}  onChangeCompleted={this.onChangeCompleted}/>
    })
    return (
      <div className="todo-list">
        {TodoItems}
        <div>
          {this.state.character.name}
        </div>
      </div>
    )
  }

}

export default ToDoList