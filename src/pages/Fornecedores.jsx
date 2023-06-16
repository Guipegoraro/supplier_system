import React, { useState, useEffect } from "react";
import AddSupplierForm from "../components/AddSupplierForm";
import { useAuth } from "../contexts/AuthAndDatabase";
import SupplierRender from "../components/render/RenderSupplier";

export default function Fornecedores() {

  const [showAddSupplierForm, setShowAddSupplierForm] = useState(false);
  const { getSuppliersFromDatabase, currentUser } = useAuth();
  const [suppliers, setSuppliers] = useState([]);
  async function getSuppliers() {
    const suppliers = await getSuppliersFromDatabase();
    setSuppliers(suppliers);
  }
    
    
    
  useEffect(() => {
    getSuppliers(); 
  }, []);




  return (
    <div className="fornecedores">
      {currentUser?.role === "admin" && (
        <>
          {showAddSupplierForm ? (
            <AddSupplierForm
              showAddSupplierForm={showAddSupplierForm}
              setShowAddSupplierForm={setShowAddSupplierForm}
              getSuppliers={getSuppliers}
            />) : (<button onClick={() => setShowAddSupplierForm(true)}>Adicionar Fornecedor</button>
          )}
        </>
      )}
      {suppliers?.map((supplier,index) => {
        return(
          <SupplierRender key={index} supplier={supplier}/>
        )
      })}
    </div>
  );
}
