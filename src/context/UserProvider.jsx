import React, { useEffect, useState } from 'react';
import { UserContext } from './UserContext';
/* import { data } from '../data/datadb.js'; */

export const UserProvider = ({ children }) => {
  const [info, setInfo] = useState([]);

  /* console.log(data); */

  useEffect(() => {
    const fetchLoad = async () => {
      let data = await fetch('https://jsonplaceholder.typicode.com/todos');
      let response = await data.json();

      setInfo(response);
    };
    fetchLoad();
    console.log('data');
  }, []);

  return <UserContext.Provider value={info}>{children}</UserContext.Provider>;
};
