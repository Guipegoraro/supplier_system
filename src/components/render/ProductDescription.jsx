/* eslint-disable react/prop-types */
import React from 'react'

export default function ContactDescription({ product }) {
    const { currentStock, productPriceBuy} = product;
    
    return (
        <div>
            <p>Preço Compra: {productPriceBuy}</p>
            <p>Estoque atual: {currentStock}</p>
            <button>Editar este produto</button> {/*  ADD FUNCTION TO EDIT CONTACT */}
            <button>Excluir este produto</button> {/* ADD FUNCTION TO DELETE CONTACT */}
        </div>
    )
}
