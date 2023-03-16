import axios from "axios";
import React, { useEffect, useState } from "react";

const Form = ({ setEvent, event }) => {
  const handleSubmit = (evnt) => (
    evnt.preventDefault(), setEvent(evnt.target.valueInput.value)
  );
  const [API, setAPI] = useState();
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/?name=${API}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }, [API, event]);
  const handleOnChange = (e) => {
    if(API = ' ' ){
      axios
      .get(`https://rickandmortyapi.com/api/location/${event}`)
      .then((res) => {setallElemt(res.data),setError(true)})
      .catch((err) => console.log(err));
    }
    setAPI(e.target.value)
  };
  console.log(API)
  return (
    <form className="contain__form" onSubmit={handleSubmit}>
      <input
        onChange={handleOnChange}
        id="valueInput"
        type="text"
        placeholder="Only numbers from 1 to 126"
      />
      <button className="button__form"> Search</button>
    </form>
  );
};

export default Form;
