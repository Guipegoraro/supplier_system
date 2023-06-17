import React, { useState } from 'react'
import ContactDescription from './ContactDescription';

export default function RenderProduct({ contact, index }) {
    const [showMoreInfo, setShowMoreInfo] = useState(false);


    return (
        <div className="contact">
            <p>Nome do contato: {contact.name}</p>
            <button onClick={() => setShowMoreInfo(!showMoreInfo)}>{showMoreInfo ? 'Menos informações' : 'Mais informações'}</button>
            {showMoreInfo && <ContactDescription contact={contact} index={index} />}
        </div>
    )
}
