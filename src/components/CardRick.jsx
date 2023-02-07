import React, { useEffect, useState } from "react";

const CardRick = ({ url }) => {
  const [urlRick, seturlRick] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => seturlRick(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(urlRick)
  return (
  <div className="cards__component">
   <div className="contain__img">
    <img src={urlRick?.image} alt={urlRick?.name} />
    <div className="status">
    
    <i className={`bx bxs-polygon ${urlRick?.status}`}></i>
    <p>{urlRick?.status}</p>
    </div>
   </div>
   <ul>
    <li><span className="info__cards">Name: </span> {urlRick?.name}</li>
    <li> <span className="info__cards">Type: </span>{urlRick?.origin.name}</li>
    <li> <span className="info__cards">Episodes:</span> {urlRick?.episode.length}</li>
   </ul>
  </div>
  );
};

export default CardRick;
