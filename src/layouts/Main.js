import React, {useEffect,  useReducer, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Start } from '../pages/Start'
import { Catalog } from '../pages/Catalog'
import { AddBook } from '../pages/AddBook'
import { RemoveBook } from '../pages/RemoveBook'
import { MainHeader } from '../components/MainHeader'


import '../styles/Main.css'

const booksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.book];
    case 'REMOVE':
      return state.filter(book => book.id !== action.id);
    case 'FETCH':
      return action.data;
    case 'SEARCH':
    return state.filter(book => book.title === action.title);
    default:
      throw new Error('O kurwa...!!!')
  }
}

export const Main = (props) => {

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
        <div className="main-header">
          {props.search ? <MainHeader searchHandler={dispatch}/> : null}
        </div>
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
