/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import RenderProduct from './RenderProduct';

function SupplierRender({ supplier }) {
  const [showContacts, setShowContacts] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="supplier-container">
      <h2>Razão Social: {supplier.businessName}</h2>
      <p>Ramo Principal: {supplier.mainBusiness}</p>
      <p>CNPJ: {supplier.cnpj}</p>
      <p>Observações: {supplier.annotations}</p>
      <button>Excluir este fornecedor (os produtos também serão excluidos)</button>
      <button>Editar este fornecedor</button>
      <button onClick={() => setShowContacts(!showContacts)}>Mostrar contatos</button>
      <button onClick={() => setShowProducts(!showProducts)}>Mostrar produtos</button>

      {showContacts && supplier.contacts.map((contact, index) => {
        return(
          <RenderProduct contact={contact} key={index} index={index} />
        )
      })}
      
      {showProducts && supplier.products.map((product, index) => {
        return(
          <div className="product" key={index}>
            <p>Nome do produto: {product.productName}</p>
            <p>Preço de compra: {product.productPriceBuy}</p>
            <p>Preço de venda: {product.productPriceSell}</p>
            <p>Estoque atual: {product.currentStock}</p>
            <button>Editar este produto</button> {/*  ADD FUNCTION TO EDIT PRODUCT */}
            <button>Excluir este produto</button> {/* ADD FUNCTION TO DELETE PRODUCT */}
          </div>
        )
      })}
    </div>
  );
}

export default SupplierRender;