import React from 'react'
import './app.scss'
import Dock from './components/Dock.jsx'
import Nav from './components/Nav.jsx'  
import MacWindow from './components/Windows/MacWindow.jsx'
const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>
      <MacWindow>
        <h1>hello</h1>
      </MacWindow>
    </main>
  )
}

export default App

