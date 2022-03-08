import React, {useState} from 'react'
import '../styles/AddBook.css'

export const AddBook = (props) => {
  


  const [inputTitle, setInputTitle] = useState('');
  const [inputAuthor, setInputAuthor] = useState('');
  const [inputCategory, setInputCategory] = useState('');
  const [inputYear, setInputYear] = useState('');
  const [inputPages, setInputPages] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputCover, setInputCover] = useState('');

  console.log(props.data.length + 1);
  const handleSubmit = (e) => {
    e.preventDefault()
    const newBook = {
      id: props.data.length + 1,  // to jest błąd bo podczas usuwania rozmiar się zmniejsza i można nadać to samo id.
      title: inputTitle,
      author: inputAuthor,
      categories: inputCategory,
      year: inputYear,
      pages: inputPages,
      description: inputDescription,
      cover: inputCover
    }
    props.addHandler({type: 'ADD', book: newBook})
    setInputTitle('');
    setInputAuthor('');
    setInputCategory('');
    setInputYear('');
    setInputPages('');
    setInputDescription('');
    setInputCover('');
  }

  const handleChangeTitle = (e) => {
    setInputTitle(e.target.value);
  }
  const handleChangeAuthor = (e) => {
    setInputAuthor(e.target.value);
  }
  const handleChangeCategory = (e) => {
    setInputCategory(e.target.value);
  }
  const handleChangeYear = (e) => {
    setInputYear(e.target.value);
  }
  const handleChangePages = (e) => {
    setInputPages(e.target.value);
  }
  const handleChangeDescription = (e) => {
    setInputDescription(e.target.value);
  }
  const handleChangeCover = (e) => {
    setInputCover(e.target.value);
  }

  return (
    <div className='form-container'>
      <h2>Dodawanie książki do katalogu</h2>
      <form onSubmit={handleSubmit}>
        <label>Tytuł: <input type="text" onChange={handleChangeTitle} value={inputTitle}/></label>
        <label>Autor: <input type="text" onChange={handleChangeAuthor} value={inputAuthor}/></label>
        <label>Kategoria: <input type="text" onChange={handleChangeCategory} value={inputCategory}/></label>
        <label>Rok wydania: <input type="text" onChange={handleChangeYear} value={inputYear}/></label>
        <label>Liczba stron: <input type="text" onChange={handleChangePages} value={inputPages}/></label>
        <label>Opis: <textarea onChange={handleChangeDescription} value={inputDescription}></textarea></label>
        <label>Okładka: <input type="text" onChange={handleChangeCover} value={inputCover}/></label>
        <button>Dodaj</button>
      </form>
    </div>
  )
}
