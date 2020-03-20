import React, { useState } from 'react';

const Form = () => {

  const { value, setValue } = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
