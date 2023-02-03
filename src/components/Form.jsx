import React from "react";

const Form = ({ setEvent }) => {
  const handleSubmit = (evnt) => (
    evnt.preventDefault(), setEvent(evnt.target.valueInput.value)
  );

  return (
    <form onSubmit={handleSubmit}>
      <input id="valueInput" type="text" />
      <button>Search</button>
    </form>
  );
};

export default Form;
