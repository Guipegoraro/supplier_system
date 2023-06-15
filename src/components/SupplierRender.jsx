import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthAndDatabase";
export default function SupplierRenderComponent( { supplier } ) {






    return (
        <div>
          <h3>Razão Social: {supplier.businessName}</h3>
          <p>Ramo Principal: {supplier.mainBusiness}</p>
          <p>CNPJ: {supplier.cnpj}</p>
          {contacts.map((contact, index) => {
            <div className="contact" key={index}>
              <p>Nome do contato: {contact.name}</p>
              <p>Telfone: {contact.name}</p>
              <p>Nome do contato: {contact.name}</p>
              <p>Nome do contato: {contact.name}</p>
              <p>Nome do contato: {contact.name}</p>
            </div>
          })}








        </div>
    )
}