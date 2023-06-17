/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import RenderProduct from './RenderProduct';
import RenderContact from './RenderContact';
import { useAuth } from '../../contexts/AuthAndDatabase';
function RenderSupplier({ supplier, getSuppliers }) {
  const [showContacts, setShowContacts] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const { deleteSupplierFromDatabase } = useAuth();

    
  function askForConfirmation() {
    const confirmation = window.confirm('Tem certeza que deseja excluir este fornecedor?');
    if (confirmation) {
      deleteSupplierFromDatabase(supplier);
      getSuppliers();
    }
  }




  return (
    <div className="supplier-container">
      <h2>Razão Social: {supplier.businessName}</h2>
      <p>Ramo Principal: {supplier.mainBusiness}</p>
      <p>CNPJ: {supplier.cnpj}</p>
      <p>Observações: {supplier.annotations}</p>
      <div className="supplierButtons">
        <button onClick={askForConfirmation}>Excluir este fornecedor </button>
        <button>Editar este fornecedor</button>
        <button onClick={() => setShowContacts(!showContacts)}>Mostrar contatos</button>
        <button onClick={() => setShowProducts(!showProducts)}>Mostrar produtos</button>
      </div>
      {showContacts && supplier.contacts.map((contact, index) => {
        return (
          <RenderContact contact={contact} key={index} index={index} />
        )
      })}
      {showProducts && supplier.products.map((product, index) => {
        return (
          <RenderProduct product={product} key={index} index={index} />
        )
      })}
    </div>
  );
}

export default RenderSupplier;