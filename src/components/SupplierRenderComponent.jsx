import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthAndDatabase";
export default function SupplierRenderComponent() {

    const { getSuppliersFromDatabase } = useAuth();
    const {suppliers, setSuppliers} = useState('');

    useEffect(() => {
    setSuppliers(getSuppliersFromDatabase())    
    })

    return (
        <div>
             
        </div>
    )
}