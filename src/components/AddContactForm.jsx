import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthAndDatabase';
export default function AddContactForm({ closeForm }) {

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
                currentStock: '',
                productPriceBuy: '',
                productPriceSell: '',
            }
        ],
    });
    const [suppliers, setSuppliers] = useState([]);
    const { getSuppliersFromDatabase } = useAuth();
    async function getSuppliers() {
        const suppliers = await getSuppliersFromDatabase();
        setSuppliers(suppliers);
    }

    useEffect(() => {
        getSuppliers();
    }, []);


    const { addSupplierToDatabase } = useAuth();


    async function handleAddSupplierFormSubmit() {
        await addSupplierToDatabase(supplierFormData);
        closeForm(false);
        getSuppliers();
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

    function handleContactOnChange(event, index) {
        const updatedContacts = [...supplierFormData.contacts];
        updatedContacts[index][event.target.name] = event.target.value;
        setSupplierFormData({
            ...supplierFormData,
            contacts: updatedContacts,
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

    function handleSupplierSelect(event) {
        suppliers.filter((supplier, index) => {
            if (index == event.target.value) {
                setSupplierFormData({
                    ...supplierFormData,
                    businessName: supplier.businessName,
                    mainBusiness: supplier.mainBusiness,
                    annotations: supplier.annotations,
                    cnpj: supplier.cnpj,
                    contacts: supplier.contacts,
                    products: supplier.products,
                })
            }
        }
        )
    }



    return (
        <div className='supplierForm'>
            <button onClick={() => closeForm(false)}>Fechar</button>
            <form onSubmit={(event) => handleSupplierSelect(event)} >
                <select name='selectSupplier' onChange={handleSupplierSelect}>
                    <option value=''>Selecione um fornecedor</option>
                    {suppliers?.map((supplier, index) => {
                        return <option key={index} value={index}>{supplier.businessName}</option>
                    })}
                </select>
            </form>
            <form onSubmit={(event) => event.preventDefault()}>
                {supplierFormData.contacts.map((contact, index) => {

                    return (<div className='contactForm' key={index}>
                        <h3>Dados do Contato</h3>

                        <label htmlFor={`name${index}`}>Nome do contato:</label>
                        <input type='text' name='name' id={`name${index}`} value={contact.name} onChange={(event) => handleContactOnChange(event, index)} />

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
                <button onClick={handleAddAnotherContact}>Adicionar mais linhas de contato</button>
                <button onClick={handleAddSupplierFormSubmit}>Confirmar</button>
            </form>
        </div>
    );
}

