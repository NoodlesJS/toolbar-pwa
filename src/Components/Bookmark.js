import React from 'react'
import Back from './Back';

export default function Bookmark() {
    return (
        <section style={{height: '100vh',background: '#D5FAFF'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '30px'}}>
                <Back />
                <p style={{fontSize: '32px', fontWeight: '700', margin: '0'}}>BOOKMARK</p>
            </div>
        </section>
    )
}
