import React, { useContext, useEffect, useState, useMemo } from 'react';
import { UserContext } from '../context/UserContext';
import { ItedmData } from './ItemsData';

export const LoginPage = () => {
  const data = useContext(UserContext);
  console.log('data', data);

  return (
    <>
      <h1>Login Page</h1>
      <ItedmData data={data} />
    </>
  );
};
