import React from "react";
import './ToDoItem.scss'

function TodoItem(props) {

  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }
  return (
    <div className="todo-item">
      <label className="todo-item-сheckbox">
        <input type="checkbox" checked={props.item.completed} onChange={() => props.onChangeCompleted(props.index)}/>
        <p style={ props.item.completed ? completedStyle : null}>{props.item.text}</p>
      </label>
      <button onClick={() => props.onDeleteItem(props.index)}>УДАЛИТЬ</button>
    </div>
  )
}

export default TodoItem