import React, {useState} from 'react'
import '../styles/MainHeader.css'

export const MainHeader = (props) => {

  const [searchValue, setSearchValue] = useState('');

  const searchChange = (e) => {
    setSearchValue(e.target.value);
  }


console.log(searchValue);

  return (
    <div className='mainHeader-container'>
        <input type="text" onChange={searchChange} value={searchValue}/><button onClick={()=>props.searchHandler({type: 'SEARCH', title:searchValue})}>search</button>
    </div>
  )
}
