import React from "react";
import './Menu.scss'
import { NavLink } from 'react-router-dom'


function Menu() {

  return (
    <div className='Menu'>
      <nav>
        <ul>
          <li><NavLink exact to='/' activeClassName="selected"><div className="a"></div></NavLink></li>
          <li><NavLink to='/todo' activeClassName="selected"><div className="a"></div></NavLink></li>
          <li><NavLink to='/fetch' activeClassName="selected"><div className="a"></div></NavLink></li>
        </ul>
      </nav>

    </div>
  )
}

export default Menu