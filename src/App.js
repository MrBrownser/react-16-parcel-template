import React, { useEffect } from 'react';

import Form from './components/Form';

const App = () => {

  useEffect(() => {
    console.log('Hello I just loaded!'); // eslint-disable-line
  }, []);

  return (
    <div className="App">
      <h1> Hello Dev! </h1>
      <Form />
    </div>
  );
};

export default App;
