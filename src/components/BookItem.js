import React, {useState} from 'react'
import '../styles/BookItem.css'


export const BookItem = (props) => {

  const [detailsActive, setDetailsActive] = useState(false);


 const handleDetailsActive = () => {
    setDetailsActive(!detailsActive);
 
  }



  return (
    <div className='bookitem-all-container'>
        <div className="primary-container">

            <ul>
              <li><h2>{props.title}</h2> </li>
              <li><h3>{props.author}</h3> </li>
             </ul>
             <button onClick={handleDetailsActive}>
             {detailsActive ? "zamknij" :
             "szczegóły"}</button>
        </div>
        
        {detailsActive ?
        <div className="detail-container">
        <img src={props.cover} alt="" />
        <h3>
        Rok wydania: <span>{props.year} </span>
        Kategorie: <span>{props.categories} </span>
        Liczba stron: <span>{props.pages} </span>
        </h3>
        <p>{props.description}</p> 
        </div> :
        null
        }
    </div>
  )
}
