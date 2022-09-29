import * as React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Generator } from './components/Generator';
import { Rota } from './components/Rota';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to={'/'}>Home</Link>
            <p></p>
            <Link to={'/random'}>Random Name Generator</Link>
            <p></p>
            <Link to={'/rota'}>Stand Up Rota</Link>
            <p></p>
          </nav>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/random' element={<Generator/>}/>
            <Route path='/rota' element={<Rota/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
