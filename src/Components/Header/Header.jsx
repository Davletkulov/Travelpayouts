import React from "react";
import customData from '../../data.js'

import './Header.css'

function Menu() {
  const balance = customData.header.balance
  return (
    <div className='header'>
      <div>баланс: {balance}</div>

    </div>
  )
}

export default Menu