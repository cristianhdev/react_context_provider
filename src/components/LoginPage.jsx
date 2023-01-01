import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {
  const { title } = useContext(UserContext);
  console.log(title);

  return (
    <>
      <h1>Login Page {title}</h1>

      {/* <pre>{JSON.stringify(info, null, 2)}</pre> */}
    </>
  );
};
