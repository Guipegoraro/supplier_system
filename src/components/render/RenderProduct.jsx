/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ProductDescription from './ProductDescription';
export default function RenderProduct({ product, index }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const { productName, productPriceSell } = product;

  return (
    <div className='product'>
      <div className='productText'>
      <p>Nome do produto: {productName}</p>
      <p>Preço de venda: {productPriceSell}</p>
      </div>
      <button onClick={() => setShowMoreInfo(!showMoreInfo)}>{showMoreInfo ? 'Menos informações' : 'Mais informações'}</button>
      {showMoreInfo && <ProductDescription product={product} index={index} />}
    </div>
  )
}
