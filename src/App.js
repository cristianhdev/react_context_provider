import React from 'react';
import './style.css';

import { NavBar, HomePage, AboutPage, LoginPage } from './components';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';

export default function App() {
  return (
    <UserProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </UserProvider>
  );
}
