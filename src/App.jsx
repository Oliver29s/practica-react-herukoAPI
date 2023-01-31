import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [allElemt, setallElemt] = useState('')
  useEffect(() => {
   axios
   .get('https://amazing-events.herokuapp.com/api/events')
   .them( res => setallElemt(res.data))
   .catch()
  }, [])
  

  return (
    <div className="App">
      
    </div>
  )
}

export default App
