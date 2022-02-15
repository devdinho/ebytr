import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    const { target: { value } } = e;
    setUsername(value);
  };

  return (
    <form>
      <label htmlFor="username">
        User:
        <input
          value={ username }
          onChange={ handleChange }
          type="text"
          id="username"
        />
      </label>
    </form>
  );
};

export default Form;