import React from "react";
import './Button.scss'

function Button(props) {

  return (
    <button className={props.whiteButton}>{props.text}</button>
  )
}

export default Button