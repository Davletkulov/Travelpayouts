import React from 'react'

function  Input(props) {

  onChangeSpeed = (e) => {
    props.onChangeSpeed(e.target.value)
  }

  return (
    <input value={props.speed} onChange={() => props.onChangeSpeed()}/>
  )
}

export default Input