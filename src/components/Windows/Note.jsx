import { useEffect,useState } from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import "./note.scss"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = ({windowName, windowState, setwindowState}) => {
    const [markDown, setmarkDown] = useState(null)

    useEffect(()=>{
        fetch("/note.txt")
            .then(response => response.text())
            .then(text => setmarkDown(text))
    },[])
  return (
    <MacWindow windowName={windowName} windowState={windowState} setwindowState={setwindowState}>
      <div className="note-window">
        {markDown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markDown}</SyntaxHighlighter> : <p>Loading...</p>}
      </div>
    </MacWindow>
  )
}

export default Note
