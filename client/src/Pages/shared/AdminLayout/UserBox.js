import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// img
import faisal from './faisal.png';

import { LoginContext } from '../../../Context/loginContext';

const UserBox = () => {
  const { userBoxData, setUserBoxData } = useContext(LoginContext);

  return (
    <div className="user-box dropdown">
      <a
        className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src={faisal} className="user-img" />
        <div className="user-info ps-3">
          <p className="user-name mb-0">
            {userBoxData.firstName} {userBoxData.lastName}
          </p>
          <p className="designattion mb-0">{userBoxData.email}</p>
        </div>
      </a>

      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <Link className="dropdown-item" to="/app/profile">
            <i className="bx bx-user"></i>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:;">
            <i className="bx bx-cog"></i>
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:;">
            <i className="bx bx-home-circle"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li>
          <div className="dropdown-divider mb-0"></div>
        </li>
        <li>
          <Link className="dropdown-item" to="/join/login">
            <i className="bx bx-log-out-circle"></i>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserBox;
