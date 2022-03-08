import React from 'react'
import '../styles/RemoveItem.css'

export const RemoveItem = (props) => {

    const handleOnClick = () => {
        props.setReducer(props.id,'REMOVE');
    }

  return (
    <div className='removeItem-container'>
        <ul>
            <li>{props.title}</li>
            <li>{props.author}</li>
            <button onClick={handleOnClick}>usuń</button>
        </ul>
    </div>
  )
}
