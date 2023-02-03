import { useEffect, useState } from "react";
import "./App.css";
import CardRick from "./components/CardRick";
import LocationRick from "./components/LocationRick";
import useNumberRandom from "./utili/useNumberRandom";

function App() {
  const [allElemts, setallElemt] = useState("");
  const [event, setEvent] = useState(useNumberRandom());
  useEffect(() => {
    
      fetch(`https://rickandmortyapi.com/api/location/${event}`)
      .then( res => res.json())
      .then((data) => setallElemt(data))
      .catch((err) => console.log(err));
  }, [event]);

  

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <LocationRick allElemts={allElemts} setEvent={setEvent} />
      {
        allElemts?.residents?.map( url =>(
          <CardRick key={url} url={url} />
        ))
      }
      
    </div>
  );
}

export default App;
