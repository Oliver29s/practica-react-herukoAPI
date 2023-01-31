import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [allElemt, setallElemt] = useState('')
  useEffect(() => {
   axios
   .get('https://pokeapi.co/api/v2/pokemon/ditto')
   .then( res => setallElemt(res.data))
   .catch(err => console.log(err))
  }, [])

  console.log(allElemt);

  
  return (
    <div className="App">
      <Form />
    </div>
  )
}

export default App
