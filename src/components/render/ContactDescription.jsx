import React from 'react'



export default function ContactDescription({ contact }) {
    const { telephone, email, address, annotations } = contact;
    return (
        <div>
            <p>Telefone: {telephone}</p>
            <p>Email: {email}</p>
            <p>Endereço: {address}</p>
            <p>Anotações: {annotations}</p>
        </div>
    )
}
