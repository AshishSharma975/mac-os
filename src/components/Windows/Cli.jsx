import React from 'react'
import Terminal from 'react-console-emulator'
import MacWindow from './MacWindow.jsx'
import './Cli.scss'

const Cli = ({windowName, windowState, setwindowState}) => {
  const commands = {
    about: {
      description: 'About me',
      usage: 'about',
      fn: () =>
        `Hi 👋 I'm Ashish,
A passionate Full Stack Developer who loves building
modern, clean & interactive web applications.`
    },

    skills: {
      description: 'Show technical skills',
      usage: 'skills',
      fn: () =>
        `Skills:

Frontend:
- HTML, CSS, JavaScript
- React, Tailwind

Backend:
- Node.js, Express
- MongoDB

Tools:
- Git, GitHub, Postman`
    },

    projects: {
      description: 'List of projects',
      usage: 'projects',
      fn: () =>
        `Projects:

1. Portfolio Website
2. Authentication System
3. Task Manager App
4. Terminal Portfolio (this one 😉)`
    },

    contact: {
      description: 'Contact info',
      usage: 'contact',
      fn: () =>
        `Contact Me:

📧 Email: hello@example.com
🐙 GitHub: github.com/yourname
🔗 LinkedIn: linkedin.com/in/yourname`
    },

    resume: {
      description: 'Download resume',
      usage: 'resume',
      fn: () => '📄 Resume download coming soon...'
    },

    echo: {
      description: 'Print text',
      usage: 'echo <text>',
      fn: (...args) => args.join(' ')
    },

    
  }

  return (
    <MacWindow windowName={windowName} windowState={windowState} setwindowState={setwindowState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={`
👋 Welcome to Ashish's Portfolio CLI

Type 'help' to see available commands.
`}
          promptLabel="ashish:~$"
          promptLabelStyle={{ color: '#00ff9c' }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli
