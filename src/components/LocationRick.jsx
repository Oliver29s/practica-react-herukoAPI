import React from "react";
import Form from "./Form";

const LocationRick = ({ allElemts, setEvent }) => {
  return (
    <>
      <Form setEvent={setEvent} />
      <section>
        <h2>Name: {allElemts?.name}</h2>
        <p>Type: {allElemts?.type}</p>
        <p>Dimenssion: {allElemts?.dimension}</p>
        <p>Residents: {allElemts?.residents?.length}</p>
      </section>
    </>
  );
};

export default LocationRick;
