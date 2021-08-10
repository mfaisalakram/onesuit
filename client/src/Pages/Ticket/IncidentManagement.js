import React, { useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { LoginContext } from '../../Context/loginContext';

const IncidentManagement = () => {
  const { pageTitle } = useContext(LoginContext);
  return (
    <div>
      <ToastProvider>
        {/* ///fdewd */}
        <h3 style={{ textAlign: 'center', color: '#8833FF' }}>{pageTitle}</h3>
        <Outlet />
      </ToastProvider>
    </div>
  );
};

export default IncidentManagement;
