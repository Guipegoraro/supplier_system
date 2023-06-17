import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthAndDatabase'


export default function RoutesLinks() {
  const { currentUser } = useAuth();


  return (
    <nav className='navLink'>
      <ul>
        <li>
          <Link to='/' > Home </Link>
        </li>

        <li>
          <Link to='/Fornecedores' > Fornecedores </Link>
        </li>

        <li>
          <Link to='/Produtos' > Produtos </Link>
        </li>

        <li>
          <Link to='/Contatos' > Contatos </Link>
        </li>
      {currentUser?.role === 'manager' && 
        <li>
        <Link to='/Cotacoes' > Cotacoes </Link>
        </li>
}
      </ul>
    </nav>
  )
}
