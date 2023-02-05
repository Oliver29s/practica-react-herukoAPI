import React from "react";
import Form from "./Form";

const LocationRick = ({ allElemts, setEvent }) => {
  return (
    <>
     
      <section className="section__location">
        <h2>Name: {allElemts?.name}</h2>
        <div className="section__info">
        <div className="bxs-rule">
          <i class='bx bxs-universal-access'></i>
            <p>Type: {allElemts?.type}</p>
          </div>
          <div className="bxs-rule"> 
          <i class='bx bxs-ruler'></i>
            <p>Dimenssion: {allElemts?.dimension}</p>
          </div>
          <div className="bxs-rule">
          <i class='bx bxs-home-alt-2'></i>
            <p>Residents: {allElemts?.residents?.length}</p>
          </div>
        </div>
      
       
        
      </section>
      <Form setEvent={setEvent} />
    </>
  );
};

export default LocationRick;
