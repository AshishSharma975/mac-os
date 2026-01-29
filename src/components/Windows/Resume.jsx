import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"
const Resume = ({windowName, windowState, setwindowState}) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setwindowState={setwindowState}>
      <div className="resume-window">
        <iframe 
          src="/resume.pdf" 
          frameBorder="0"
          title="Resume" 
          width="100%" 
          height="100%" 
          style={{ border: 'none' }}
        />
      </div>
    </MacWindow>
  )
}

export default Resume
