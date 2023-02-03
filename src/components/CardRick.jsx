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
  <div>CardRick</div>
  );
};

export default CardRick;
