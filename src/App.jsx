import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import LocationRick from './components/LocationRick'

function App() {
  const [allElemts, setallElemt] = useState('')
  const [event, setEvent] = useState(7)
  useEffect(() => {
   axios
   .get(`https://rickandmortyapi.com/api/location/${event}`)
   .then( res => setallElemt(res.data))
   .catch(err => console.log(err))
  }, [])

  console.log(allElemts);

  
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <LocationRick allElemts={allElemts} />
    </div>
  )
}

export default App
