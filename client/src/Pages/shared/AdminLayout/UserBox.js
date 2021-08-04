import React from 'react';
import { Link } from 'react-router-dom';

// img
import faisal from './faisal.png';

const UserBox = () => {
  const UserBoxData = [
    {
      img: faisal,
      firstName: 'Faisal',
      lastName: 'Akram',
      job: 'Web Designer',
    },
  ];

  return (
    <div className="user-box dropdown">
      {UserBoxData.map((item, index) => {
        return (
          <a
            className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {' '}
            <img src={item.img} className="user-img" alt="user avatar" />
            <div className="user-info ps-3">
              <p className="user-name mb-0">
                {item.firstName} {item.lastName}
              </p>
              <p className="designattion mb-0">{item.job}</p>
            </div>
          </a>
        );
      })}

      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <a className="dropdown-item" href="javascript:;">
            <i className="bx bx-user"></i>
            <span>Profile</span>
          </a>
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
          <a className="dropdown-item" href="javascript:;">
            <i className="bx bx-dollar-circle"></i>
            <span>Earnings</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="javascript:;">
            <i className="bx bx-download"></i>
            <span>Downloads</span>
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
