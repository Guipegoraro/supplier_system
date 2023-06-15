import React, { useState } from "react";
import AddSupplierForm from "../components/AddSupplierForm";
import { useAuth } from "../contexts/AuthAndDatabase";
export default function Fornecedores() {
  const [showAddSupplierForm, setShowAddSupplierForm] = useState(false);
  const { currentUser } = useAuth();
  console.log(currentUser
    )
  return (
    <div className="fornecedores">
      {currentUser?.role === "admin" && (
        <>
          {showAddSupplierForm ? (
            <AddSupplierForm
              showAddSupplierForm={showAddSupplierForm}
              setShowAddSupplierForm={setShowAddSupplierForm}
            />
          ) : (
            <button onClick={() => setShowAddSupplierForm(true)}>
              Adicionar Fornecedor
            </button>
          )}
        </>
      )}
    </div>
  );
}
