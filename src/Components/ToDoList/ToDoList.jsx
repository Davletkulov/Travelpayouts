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
    // console.log(id)
    // const index = id
    this.setState(prevState => {
      // let updateTodos = prevState.todos.map((todo, index) => {
      //   if (index === id) {
      //     // updateTodos.splice(3, 1)
      //   }
      //   console.log(updateTodos)
      //   return todo
      // })

      return {
        todos: todosData.splice(id, 1)
      }
    })
  }


  render() {
    const TodoItems = todosData.map((item, index) => {
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