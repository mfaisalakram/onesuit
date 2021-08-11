import React, { useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { LoginContext } from '../../Context/loginContext';

const IncidentManagement = () => {
  const { pageTitle } = useContext(LoginContext);
  return (
    <div>
      <ToastProvider>
        <h3
          style={{
            textAlign: 'center',
            color: '#8833FF',
            backgroundColor: '#F1E6FF',
            width: '300px',
            margin: 'auto',
            borderRadius: '50px',
            padding: '10px',
            marginBottom: '20px',
          }}
        >
          {pageTitle}
        </h3>
        <Outlet />
      </ToastProvider>
    </div>
  );
};

export default IncidentManagement;
