/* eslint-disable react/prop-types */
import React from 'react'

export default function ContactDescription({ product }) {
    const { currentStock, productPriceBuy} = product;
    
    return (
        <div className='productDescription'>
            <div className='productDescriptionText'>
            <p>Preço Compra: {productPriceBuy}</p>
            <p>Estoque atual: {currentStock}</p>
            </div>
            <div className='productButtons'>
            <button>Editar este produto</button> {/*  ADD FUNCTION TO EDIT CONTACT */}
            <button>Excluir este produto</button> {/* ADD FUNCTION TO DELETE CONTACT */}
            </div>
        </div>
    )
}
