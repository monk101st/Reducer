import React from 'react'
import {NavLink} from 'react-router-dom'

export const Nav = (props) => {
  return (
    <ul className="nav-ul-container">
    <li><NavLink to='/'onClick={()=>props.searchChange('')}>start</NavLink></li>
    <li><NavLink to='/catalog' onClick={()=>props.searchChange('search')}>Katalog</NavLink></li>
    <li><NavLink to='/addbook' onClick={()=>props.searchChange('')}>Dodaj</NavLink></li>
    <li><NavLink to='/removebook' onClick={()=>props.searchChange('')}>Usuń</NavLink></li>
</ul>
  )
}
