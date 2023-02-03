import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardRick from "./components/CardRick";
import LocationRick from "./components/LocationRick";

function App() {
  const [allElemts, setallElemt] = useState("");
  const [event, setEvent] = useState(7);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${event}`)
      .then((res) => setallElemt(res.data))
      .catch((err) => console.log(err));
  }, [event]);

  

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <LocationRick allElemts={allElemts} setEvent={setEvent} />
      {
        allElemts?.residents?.map( url =>(
          <CardRick  url={url} />
        ))
      }
      
    </div>
  );
}

export default App;
