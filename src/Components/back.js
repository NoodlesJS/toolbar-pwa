import React from 'react'
import { ReactComponent as Left } from './assets/arrow-left.svg'

export default function back() {
    return (
        <section>
            <div className="circle">
                <Left stroke='white' />
            </div>
        </section>
    )
}
