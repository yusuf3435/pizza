import Navbar from './Components/Navbar';
import './App.css';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/'  element={<Home/>}/>
          <Route exact path='/menu'  element={<Menu/>}/>
          <Route exact path='/about'  element={<About/>}/>
          <Route exact path='/contact'  element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
