import React from 'react'
import {NavLink} from 'react-router-dom'

export const Nav = () => {
  return (
    <ul className="nav-ul-container">
    <li><NavLink to='/'>start</NavLink></li>
    <li><NavLink to='/catalog'>Katalog</NavLink></li>
    <li><NavLink to='/addbook'>Dodaj</NavLink></li>
    <li><NavLink to='/removebook'>Usuń</NavLink></li>
</ul>
  )
}
