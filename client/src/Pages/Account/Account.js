import React from 'react';
import { Outlet } from 'react-router-dom';

const Account = () => {
  return (
    <div>
      <h3 style={{ textAlign: 'center', color: '#8833FF' }}>All Accounts</h3>
      <Outlet />
    </div>
  );
};

export default Account;
