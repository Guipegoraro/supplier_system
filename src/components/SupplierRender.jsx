import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthAndDatabase";
export default function SupplierRenderComponent( { supplier } ) {






    return (
        <div>
          <h3>Razão Social: {supplier.businessName}</h3>
          <p>Ramo Principal: {supplier.mainBusiness}</p>
          <p>CNPJ: {supplier.cnpj}</p>
          <button>Excluir este fornecedor (os produtos também serão excluidos)</button>
          {contacts.map((contact, index) => {
            <div className="contact" key={index}>
              <p>Nome do contato: {contact.name}</p>
              <p>Telefone: {contact.name}</p>
              <p>Nome do contato: {contact.name}</p>
              <p>Nome do contato: {contact.name}</p>
              <p>Nome do contato: {contact.name}</p>
              <button>Editar este contato</button> {/* //! ADD FUNCTION TO EDIT CONTACT */}
              <button>Excluir este contato</button> {/*//! ADD FUNCTION TO DELETE THIS CONTACT */}
            </div>
          })}
        
          {products.map((product, index) => {
            <div className="contact" key={index}>
              <p>Nome do produto: {product.productName}</p>
              <p>Preço de compra: {product.productPriceSell}</p>
              <p>Preço de compra: {product.productPriceSell}</p>
              <p>Estoque atual: {product.currentStock}</p>

              <button>Editar este produto</button> {/* //! ADD FUNCTION TO EDIT PRODUCT */}
              <button>Excluir este produto</button> {/*//! ADD FUNCTION TO DELETE THIS PRODUCT */}
            </div>
          })}









        </div>
    )
}