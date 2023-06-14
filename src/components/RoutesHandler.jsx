import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Fornecedores from '../pages/Fornecedores'
import NotFound from '../pages/NotFound'


export default function RoutesHandler() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Fornecedores' element={<Fornecedores />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}
