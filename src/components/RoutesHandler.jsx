import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Fornecedores from '../pages/Fornecedores'
import NotFound from '../pages/NotFound'
import Contatos from '../pages/Contatos'
import Cotacoes from '../pages/Cotacoes'
import Produtos from '../pages/Produtos'


export default function RoutesHandler() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Fornecedores' element={<Fornecedores />} />
      <Route path='/Contatos' element={<Contatos />} />
      <Route path='/Cotacoes' element={<Cotacoes />} />
      <Route path='/Produtos' element={<Produtos />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}
