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
  <div>
   <div>
    <img src={urlRick?.image} alt={urlRick?.name} />
    <p>{urlRick?.status}</p>
   </div>
   <ul>
    <li>{urlRick?.name}</li>
    <li>{urlRick?.origin.name}</li>
    <li>{urlRick?.episode.length}</li>
   </ul>
  </div>
  );
};

export default CardRick;
