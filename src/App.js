import React from 'react'
import './App.css'

import Home from './Components/Home';
import Toolbar from './Components/Toolbar';

export default function App() {
  return (
    <section>
      <div className="wrapper">
        <div className="container">
          <Home />
          <Toolbar />
        </div>
      </div>
    </section>
  )
}

