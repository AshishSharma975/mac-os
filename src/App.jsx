import React from 'react'
import './app.scss'
import Dock from './components/Dock.jsx'
import Nav from './components/Nav.jsx'  
import MacWindow from './components/Windows/MacWindow.jsx'
import Github from './components/Windows/Github.jsx'
import Note from './components/Windows/Note.jsx'
import Resume from './components/Windows/Resume.jsx'
const App = () => {
  return (
    <main>
      <Nav/>
      <Dock/>
     <Github/>
     <Note/>
     <Resume/>
    </main>
  )
}

export default App

