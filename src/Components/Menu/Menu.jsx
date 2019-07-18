import React from "react";
import './Menu.scss'
import { NavLink } from 'react-router-dom'


function Menu() {

  return (
    <div className='Menu'>
      <nav>
        <ul>
          <li><NavLink  to='/' ><div></div></NavLink></li>
          <li><NavLink to='/todo' ><div></div></NavLink></li>
        </ul>
      </nav>

    </div>
  )
}

export default Menu