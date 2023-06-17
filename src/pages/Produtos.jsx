import React, { useState, useEffect } from 'react'
import RenderProduct from '../components/render/RenderProduct'
import { useAuth } from '../contexts/AuthAndDatabase';
export default function Produtos() {
  const [suppliers, setSuppliers] = useState([]);
  const { getSuppliersFromDatabase } = useAuth();
  async function getSuppliers() {
    const suppliers = await getSuppliersFromDatabase();
    setSuppliers(suppliers);
  }



  useEffect(() => {
    getSuppliers();
  }, []);


  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Produtos</h1>
      {suppliers?.map((supplier) => supplier.products.map((product, index) => {
        return (
          <RenderProduct product={product} key={index} index={index} />
        )
      }))}
    </div>
  )

}