import React from "react";

const Form = ({ setEvent }) => {
  const handleSubmit = (evnt) => (
    evnt.preventDefault(), setEvent(evnt.target.valueInput.value)
  );

  return (
    <form className="contain__form" onSubmit={handleSubmit}>
      <input id="valueInput" type="text" placeholder="Only numbers from 1 to 126" />
      <button className="button__form"> Search</button>
    </form>
  );
};

export default Form;
