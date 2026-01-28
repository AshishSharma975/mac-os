import { useEffect,useState } from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import "./note.scss"

const Note = () => {
    const [markDown, setmarkDown] = useState(null)

    useEffect(()=>{
        fetch("/note.txt")
            .then(response => response.text())
            .then(text => setmarkDown(text))
    },[])
  return (
    <MacWindow>
      <div className="note-window">
        {markDown ? <Markdown>{markDown}</Markdown> : <p>Loading...</p>}
      </div>
    </MacWindow>
  )
}

export default Note
