import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState("");

  const handleChangeInput = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form>
      <h1>Hello {username}</h1>
      <p>Enter your name:</p>
      <input type="text" onChange={handleChangeInput} />
    </form>
  );
};

export default Form;
