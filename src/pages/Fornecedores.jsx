import React, { useState } from "react";
import AddSupplierForm from "../components/AddSupplierForm";
import { useAuth } from "../contexts/AuthAndDatabase";
import SupplierRenderComponent from "../components/SupplierRender";
export default function Fornecedores() {

  const [showAddSupplierForm, setShowAddSupplierForm] = useState(false);
  const { getSuppliersFromDatabase, currentUser } = useAuth();
  const {suppliers, setSuppliers} = useState('');
    
    
    
  useEffect(() => {
    setSuppliers(getSuppliersFromDatabase())    
    });




  return (
    <div className="fornecedores">
      {currentUser?.role === "admin" && (
        <>
          {showAddSupplierForm ? (
            <AddSupplierForm
              showAddSupplierForm={showAddSupplierForm}
              setShowAddSupplierForm={setShowAddSupplierForm}
            />) : (<button onClick={() => setShowAddSupplierForm(true)}>Adicionar Fornecedor</button>
          )}
        </>
      )}
      {suppliers.map((supplier,index) => {
        return(
          <SupplierRender key={index} supplier={supplier}/>
        )
      })}
    </div>
  );
}
