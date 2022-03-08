import React from 'react'
import { RemoveItem } from '../components/RemoveItem'

export const RemoveBook = (props) => {

  const setReducer = (id, type) => {
    props.removeHandler({id: id, type: type})
  }

    console.log(props);

    const removeList = props.data.map(book => <RemoveItem
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        setReducer={setReducer}
        />)
  return (
    <div>
      {removeList}
    </div>
  )
}

