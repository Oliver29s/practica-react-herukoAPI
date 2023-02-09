import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CaatchError from "./components/CaatchError";
import CardRick from "./components/CardRick";
import Form from "./components/Form";
import LocationRick from "./components/LocationRick";
import useNumberRandom from "./Layout/useNumberRandom";

function App({API}) {
  const [allElemts, setallElemt] = useState("");
  const [event, setEvent] = useState(useNumberRandom());
  const [error, setError] = useState(true);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${event}`)
      .then((res) => {setallElemt(res.data),setError(true)})
      .catch((err) => {console.log(err),
        setError(false) });
  }, [event,API]);

  return (
    <div className="App">
      <header className="contain__header">
        <h1>Rick and Morty</h1>
      </header>
      <Form setEvent={setEvent} event={event} />

      {error ? (
        <>
          <LocationRick allElemts={allElemts} />
          <div className="contain__cards">
            {allElemts?.residents?.map((url) => (
              <CardRick key={url} url={url} />
            ))}
          </div>
        </>
      ) : (
        <CaatchError />
      )}
    </div>
  );
}

export default App;
