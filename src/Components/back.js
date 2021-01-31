import React from 'react'
import { ReactComponent as Left } from './assets/arrow-left.svg'
import { useHistory } from 'react-router-dom';

export default function Back() {
    let history = useHistory();

    return (
        <section>
            <div className="circle" onClick={() => history.goBack()}>
                <Left stroke='white' />
            </div>
        </section>
    )
}
