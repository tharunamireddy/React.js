import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Counter from './Components/Counter'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cart from './Components/Cart'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
