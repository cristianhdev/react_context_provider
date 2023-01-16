import React, { useEffect, useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchLoad();
  }, []);

  const fetchLoad = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let response = await data.json();

    setInfo(response);
  };

  return <UserContext.Provider value={info}>{children}</UserContext.Provider>;
};
