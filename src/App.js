import React from 'react'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import Smile from './Components/Smile';
import Bookmark from './Components/Bookmark';
import Settings from './Components/Settings';
import Toolbar from './Components/Toolbar';

export default function App() {
  return (
    <section>
      <div className="wrapper">
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route path='/smile' component={Smile} />
              <Route path='/bookmark' component={Bookmark} />
              <Route path='/settings' component={Settings} />
              <Route path='/' exact component={Home} />
            </Switch>
            <Toolbar />
          </BrowserRouter>
        </div>
      </div>
    </section>
  )
}

