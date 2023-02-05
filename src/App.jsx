import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CaatchError from "./components/CaatchError";
import CardRick from "./components/CardRick";
import LocationRick from "./components/LocationRick";
import useNumberRandom from "./utili/useNumberRandom";

function App() {
  const [allElemts, setallElemt] = useState("");
  const [event, setEvent] = useState(useNumberRandom());
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${event}`)
      .then((res) => setallElemt(res.data), setError(true))
      .catch((err) => console.log(err), setError(false));
  }, [event]);

  return (
    <div className="App">
      <header className="contain__header">
      <h1>Rick and Morty</h1>
      </header>
    
      <LocationRick allElemts={allElemts} setEvent={setEvent} />
      {
      error ? 
      <CaatchError />
      : 
      allElemts?.residents?.map((url) => <CardRick key={url} url={url} />)
      
      }
    </div>
  );
}

export default App;
