import React  from 'react'
import './app.scss'
import Dock from './components/Dock.jsx'
import Nav from './components/Nav.jsx'  
import MacWindow from './components/Windows/MacWindow.jsx'
import Github from './components/Windows/Github.jsx'
import Note from './components/Windows/Note.jsx'
import Resume from './components/Windows/Resume.jsx'
import Spotify from './components/Windows/Spotify.jsx'
import Cli from './components/Windows/Cli.jsx'
import { useState } from 'react'
const App = () => {

  const [windowState, setwindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })
  return (
    <main>
      <Nav/>
      <Dock windowState={windowState} setwindowState={setwindowState}/>
     {windowState.github && <Github windowName="github" windowState={windowState} setwindowState={setwindowState}/>}
     {windowState.note && <Note windowName="note" windowState={windowState} setwindowState={setwindowState}/>}
     {windowState.resume && <Resume windowName="resume" windowState={windowState} setwindowState={setwindowState}/>}
     {windowState.spotify && <Spotify windowName="spotify" windowState={windowState} setwindowState={setwindowState}/>}
     {windowState.cli && <Cli windowName="cli" windowState={windowState} setwindowState={setwindowState}/>}
    </main>
  )
}

export default App

