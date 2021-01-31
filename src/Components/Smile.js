import React from 'react'
import Back from './back';

export default function Smile() {
    return (
        <section style={{height: '100vh',background: '#F1DBDB'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '30px'}}>
                <Back />
                <p style={{fontSize: '32px', fontWeight: '700', margin: '0'}}>SMILE</p>
            </div>
        </section>
    )
}
