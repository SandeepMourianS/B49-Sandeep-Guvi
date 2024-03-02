import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes , Route , Link} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/bar/Home/Home'
import Menu from './components/bar/Menu/Menu'
import Contact from './components/bar/Contact/Contact'
import Aboutus from './components/bar/Aboutus/Aboutus'
import Reviews from './components/bar/Reviews/Reviews'

function App() {

  return (
    <Router>
      <Header></Header>
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/menu' element={<Menu/>}></Route>
            <Route path='/aboutus' element={<Aboutus/>}></Route>
            <Route path='/reviews' element={<Reviews/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>

  )
}

export default App
