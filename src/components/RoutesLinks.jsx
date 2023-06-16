import React from 'react'
import { Link } from 'react-router-dom'



export default function RoutesLinks() {



  return (
    <nav>
    <ul>
      <li>
        <Link to='/' > Home </Link>
    </li>
      <li>
        <Link to='/Fornecedores' > Fornecedores </Link>
        <Link to='/Produtos' > Produtos </Link>
        <Link to='/Cotacoes' > Cotacoes </Link>
        <Link to='/Contatos' > Contatos </Link>
      </li>
    </ul>
  </nav>
  )
}
