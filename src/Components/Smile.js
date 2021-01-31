import React, { useState, useEffect } from 'react'
import Back from './Back';

export default function Smile() {

    const [Dogs, SetDogs] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/3')
        .then(raw => raw.json())
        .then(data => SetDogs(data.message));
    }, [])
    console.log(Dogs);
    return (
        <section style={{minHeight: '100vh',background: '#F1DBDB', maxWidth: '500px', width: '100%', paddingBottom: '100px'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '30px'}}>
                <Back />
                <p style={{fontSize: '32px', fontWeight: '700', margin: '0'}}>SMILE</p>
            </div>
            <div className="dog-preview">
               <img src={Dogs[0]} alt=""/>
               <img src={Dogs[1]} alt=""/>
               <img src={Dogs[2]} alt=""/>
            </div>
        </section>
    )
}
