import React, {useState} from 'react';
import { Header } from './layouts/Header';
import { Nav } from './layouts/Nav';
import { Main } from './layouts/Main';
import './App.css';

function App() {

  const [searchActive, setSearchActive] = useState(false);

  const searchChange = (name) => {
    if(name === 'search') {
      setSearchActive(true);
    }else {
      setSearchActive(false);
    }
    
  }

  return (
    <div className="app-container">
      <div className="nav-container">
        <Header />
        <Nav searchChange={searchChange} />
      </div>
      <div className="main-container">
        <Main search={searchActive}/>
      </div>
    </div>
  );
}

export default App;
