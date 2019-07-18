import React from "react";
import './Button.scss'

function Button(props) {

  return (
    <button onClick={props.onDeleteValue} className={props.whiteButton}>{props.text}</button>
  )
}

export default Button