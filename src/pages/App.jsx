import { useState } from 'react'
import '../styles/App.css'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Fornecedores from './Fornecedores'
import NotFound from './NotFound'
function App() {


  return (
    <>
    <nav>
      <ul>
        <li><Link to='/' > Home </Link></li>
        <li>
          <Link to='/Fornecedores' > Fornecedores </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Fornecedores' element={<Fornecedores />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <Outlet  />
    </>
  )
}

export default App
