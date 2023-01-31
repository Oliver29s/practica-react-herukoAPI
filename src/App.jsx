import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardPoke from './components/CardPoke'
import Form from './components/Form'

function App() {
  const [allElemts, setallElemt] = useState('')
  useEffect(() => {
   axios
   .get('https://pokeapi.co/api/v2/pokemon/ditto')
   .then( res => setallElemt(res.data))
   .catch(err => console.log(err))
  }, [])

  console.log(allElemts);

  
  return (
    <div className="App">
      <Form />
      <CardPoke allElemts={allElemts} />
    </div>
  )
}

export default App
