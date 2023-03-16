'use client';

import API from '@/services/axiosConfig';
import React from 'react';

function Home() {
  const teste = () => {
    const data = {
      name: 'test name groupa',
      description: 'test description',
      shortURL: 'a'
    };

    API.post('/group', data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return <button onClick={teste}></button>;
}

export default Home;
