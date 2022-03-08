import { Header } from './layouts/Header';
import { Nav } from './layouts/Nav';
import { Main } from './layouts/Main';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="nav-container">
        <Header />
        <Nav />
      </div>
      <div className="main-container">
        <Main />
      </div>
    </div>
  );
}

export default App;
