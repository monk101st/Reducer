import React from 'react'
import { BookItem } from '../components/BookItem'

export const Catalog = (props) => {


    console.log(props.data);

    const booksList = props.data.map(book => <BookItem
        key={book.id}
        title={book.title}
        author={book.author}
        categories={book.categories}
        pages={book.pages}
        year={book.year}
        description={book.description}
        cover={book.cover}
        />)
  return (
    <div>
      {booksList}
    </div>
  )
}
