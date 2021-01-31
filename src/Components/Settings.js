import React from 'react'
import Back from './Back';

export default function Settings() {
    return (
        <section style={{height: '100vh',background: '#FFE9D5'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '30px'}}>
                <Back />
                <p style={{fontSize: '32px', fontWeight: '700', margin: '0'}}>SETTINGS</p>
            </div>
        </section>
    )
}
