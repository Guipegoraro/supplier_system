/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ProductDescription from './ProductDescription';
export default function RenderProduct({ contact, index }) {
    const [showMoreInfo, setShowMoreInfo] = useState(false);


  return (
    <div className="contact">
    <p>Nome do contato: {contact.name}</p>
    <button onClick={() => setShowMoreInfo(!showMoreInfo)}>{showMoreInfo ? '⇧' : 'Mais informações'}</button> 
    {showMoreInfo && <ProductDescription contact={contact} index={index} />}
            </div>
  )
}
