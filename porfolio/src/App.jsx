import React from 'react'

import {Routes,Route, BrowserRouter} from "react-router-dom"
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Photos from './pages/Photos'
import HomePage from './componets/HomePage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/photos' element={<Photos/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
      </BrowserRouter>
</>
  )
  
}

export default App