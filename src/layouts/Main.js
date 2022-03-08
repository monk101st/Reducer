import React, {useEffect, useState, useReducer} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Start } from '../pages/Start'
import { Catalog } from '../pages/Catalog'
import { AddBook } from '../pages/AddBook'
import { RemoveBook } from '../pages/RemoveBook'
import Axios from 'axios'

import '../styles/Main.css'

const booksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.book];
    case 'REMOVE':
      return state.filter(movie => movie.id !== action.id);
    case 'FETCH':
      return action.data;
    default:
      throw new Error('O kurwa...!!!')
  }
}

export const Main = () => {

  const [state, dispatch] = useReducer(booksReducer, []);
  
  console.log(state);
    const fetchData = () => {
        fetch('data/catalog.json')
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'FETCH', data:data.response.books});
        })
    }

    useEffect(() => setTimeout(fetchData, 3000), []
    )
          //opoźnienie wywołania funkcji fech któr pobiera danez pliku words.json.


  return (
    <>
        <div className="main-header"></div>
        <div className="main-content">
            <Routes>
                <Route path='/' element={<Start />}></Route>
                <Route path='/catalog' element={<Catalog data={state} lenght={state.lenght}/>}></Route>
                <Route path='/addbook' element={<AddBook addHandler={dispatch} data={state}/>}></Route>
                <Route path='/removebook' element={<RemoveBook data={state} removeHandler={dispatch}/>}></Route>
            </Routes>
        </div>
        <div className="main-footer"></div>
    </>
  )
}
