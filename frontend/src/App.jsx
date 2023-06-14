import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from './pages/Home';
import PastTemperature from './pages/PastTemperature';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/pasttemperature' element={<PastTemperature/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
