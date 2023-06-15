import React, { useState } from 'react'
import '../styles/App.css'
import { useAuth } from '../contexts/AuthAndDatabase';

// eslint-disable-next-line react/prop-types
export default function AddSupplierForm({ setShowAddSupplierForm }) {

  const [supplierFormData, setSupplierFormData] = useState({
    businessName: '',
    mainBusiness: '',
    annotations: '',
    cnpj: '',
    contacts: [
      {
        name: '',
        telephone: '',
        email: '',
        address: '',
        annotations: '',
      },
    ],
    products: [
      {
        productName: '',
        productPriceBuy: '',
        currentStock: '',
        productPriceSell: '',
      }
    ],
  });
  
  const { addSupplierToDatabase } = useAuth();

  async function handleAddSupplierFormSubmit() {
    addSupplierToDatabase(supplierFormData);
    setShowAddSupplierForm(false);
  }

  function handleAddAnotherContact() {
    setSupplierFormData({
      ...supplierFormData,
      contacts: [
        ...supplierFormData.contacts,
        {
          name: '',
          telephone: '',
          email: '',
          address: '',
          annotations: '',
        },
      ],
    });
  }

  function handleAddAnotherProduct() {
    setSupplierFormData({
      ...supplierFormData,
      products: [
        ...supplierFormData.products,
        {
          productName: '',
          productPrice: '',
          currentStock: '',
        },
      ],
    });
  }

  function handleSupplierChange(event) {
    setSupplierFormData({
      ...supplierFormData,
      [event.target.name]: event.target.value
    });
  }

  function handleContactOnChange(event, index) {
    const updatedContacts = [...supplierFormData.contacts];
    updatedContacts[index][event.target.name] = event.target.value;
    setSupplierFormData({
      ...supplierFormData,
      contacts: updatedContacts,
    });
  }

  function handleProductOnChange(event, index) {
    const updatedProducts = [...supplierFormData.products];
    updatedProducts[index][event.target.name] = event.target.value;
    setSupplierFormData({
      ...supplierFormData,
      products: updatedProducts,
    });
  }

  function handleDeleteContact(index) {
    const updatedContacts = [...supplierFormData.contacts];
    updatedContacts.splice(index, 1);
    setSupplierFormData({
      ...supplierFormData,
      contacts: updatedContacts
    });
  }

  function handleDeleteProduct(index) {
    const updatedProducts = [...supplierFormData.products];
    updatedProducts.splice(index, 1);
    setSupplierFormData({
      ...supplierFormData,
      products: updatedProducts
    });
  }

  return (
    <div className='supplierForm'>
      <button onClick={() => setShowAddSupplierForm(false)}>Fechar</button>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor='businessName'>Razão social:</label>
        <input type='text' id='businessName' name='businessName' value={supplierFormData.businessName} onChange={event => handleSupplierChange(event)} />

        <label htmlFor='mainBusiness'>Negócio principal:</label>
        <input type='text' id='mainBusiness' name='mainBusiness' value={supplierFormData.mainBusiness} onChange={event => handleSupplierChange(event)} />

        <label htmlFor='annotations'>Anotações:</label>
        <textarea type='text' id='annotations' name='annotations' value={supplierFormData.annotations} onChange={event => handleSupplierChange(event)} />

        <label htmlFor='cnpj'>CNPJ:</label>
        <input type='text' id='cnpj' name='cnpj' value={supplierFormData.cnpj} onChange={event => handleSupplierChange(event)} />
        {supplierFormData.contacts.map((contact, index) => {

          return (<div className='contactForm' key={index}>
            <h3>Dados do Contato</h3>

            <label htmlFor={`name${index}`}>Nome do contato:</label>
            <input type='text' name='name' id={`name${index}`} onChange={(event) => handleContactOnChange(event, index)} />

            <label htmlFor={`telephone${index}`}>Telefone:</label>
            <input type='text' name='telephone' id={`telephone${index}`} value={contact.telephone} onChange={(event) => handleContactOnChange(event, index)} />

            <label htmlFor={`email${index}`}>Email:</label>
            <input type='text' name='email' id={`email${index}`} value={contact.email} onChange={(event) => handleContactOnChange(event, index)} />

            <label htmlFor={`address${index}`}>Endereço:</label>
            <input type='text' name='address' id={`address${index}`} value={contact.address} onChange={(event) => handleContactOnChange(event, index)} />

            <label htmlFor={`annotations${index}`}>Anotações:</label>
            <input type='text' name='annotations' id={`annotations${index}`} value={contact.annotations} onChange={(event) => handleContactOnChange(event, index)} />
            <button onClick={() => handleDeleteContact(index)}>Excluir contato</button>
          </div>)
        })}
        {supplierFormData.products.map((product, index) => {

          return (<div className='contactForm' key={index}>
            <h3>Dados do Produto</h3>

            <label htmlFor={`productName${index}`}>Nome do produto:</label>
            <input type='text' name='productName' id={`productName${index}`} value={product.productName} onChange={(event) => handleProductOnChange(event, index)} />

            <label htmlFor={`productPriceBuy${index}`}>Preço de compra:</label>
            <input type='text' name='productPrice' id={`productPrice${index}`} value={product.productPriceBuy} onChange={(event) => handleProductOnChange(event, index)} />

            <label htmlFor={`productPriceSell${index}`}>Preço de venda:</label>
            <input type='text' name='currentStock' id={`productPriceSell${index}`} value={product.productPriceSell} onChange={(event) => handleProductOnChange(event, index)} />

            <label htmlFor={`currentStock${index}`}>Estoque atual:</label>
            <input type='text' name='currentStock' id={`currentStock${index}`} value={product.currentStock} onChange={(event) => handleProductOnChange(event, index)} />

            <button onClick={(index) => handleDeleteProduct(index)}>Excluir produto</button>
          </div>
          )
        })}
        <button onClick={handleAddAnotherProduct}>Adicionar mais produtos</button>
        <button onClick={handleAddAnotherContact}>Adicionar mais linhas de contato</button>
        <button onClick={handleAddSupplierFormSubmit}>Adicionar Fornecedor</button>
      </form>
      <button onClick={() => console.log(supplierFormData)}>log supplier</button>
    </div>
  );
}

