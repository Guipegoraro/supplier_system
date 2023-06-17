import React, { useState, useEffect } from 'react';
import RenderContact from '../components/render/RenderContact';
import { useAuth } from '../contexts/AuthAndDatabase';
import AddContactForm from '../components/AddContactForm';
export default function Contatos() {
  const [suppliers, setSuppliers] = useState([]);
  const { getSuppliersFromDatabase } = useAuth();
  const [showAddContactForm, setShowAddContactForm] = useState(false);




  async function getSuppliers() {
    const suppliers = await getSuppliersFromDatabase();
    setSuppliers(suppliers);
  }

  useEffect(() => {
    getSuppliers();
  }, [showAddContactForm]);



  return (
    <div>
      <h1 style={{ textAlign: 'center', }} >Contatos</h1>
      <div className="contact">
          {showAddContactForm ? (
            <AddContactForm
              showAddContactForm={showAddContactForm}
              closeForm={setShowAddContactForm}
            />) : (<button onClick={() => setShowAddContactForm(true)}>Adicionar, editar ou excluir Contatos</button>)}

        {suppliers?.map((supplier) => {
          return supplier.contacts.map((contact, index) => {
            return <RenderContact contact={contact} key={index} index={index} />;
          });
        })}
      </div>
    </div>
  );
}