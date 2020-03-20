import React, { useEffect } from 'react';
import axios from 'axios';

import Form from './components/Form';

const axiosOptions = {
  //   baseURL: url['public_api_base_url'],
  baseUrl: 'http://localhost:3500', // my-salesadmin-service local port
  timeout: 10000,
  headers: {
    'accept': 'application/json',
    'content-type': 'application/json',
    // 'authorization': `Bearer ${getToken()}`,
    'Cache-Control': 'no-cache',
    'X-Authenticated-Userid': 'sub=gorilo_user_id;global_roles=salesadmin', //TODO: This MUST GO into a config file BEFORE deploying
    'Access-Control-Allow-Origin' : 'http://localhost:3500'
  },
};

const App = () => {

  useEffect(() => {
    console.log('useEffect'); // eslint-disable-line

    async function retrieveTenants() {
      console.log('retrieveTenants'); // eslint-disable-line
      try {
        // make a test call to the service
        const tenants = await axios.get('/tenants', axiosOptions).data;
        console.log('Tenants: ', tenants); //eslint-disable-line
      } catch (e) {
        console.error(e);
      }
    }

    retrieveTenants();
  }, []);

  return (
    <div className="App">
      <h1> Hello, Sales Admin! </h1>
      <Form />
    </div>
  );
};

export default App;
