import React, { useEffect, useState } from 'react';

import axios from 'axios';

import ProfileSettings from './ProfileSettings';
import ProjectStatus from './ProjectStatus';
import ProfileData from './ProfileData';

const Profile = () => {
  let [loginToken, setLoginToken] = useState();
  let [profileData, setprofileData] = useState();
  let [isLoaded, setIsLoaded] = useState(false);

  const getProfileData = () => {
    axios
      .get('https://test-node-samiullah.herokuapp.com/accounts/getAccount', {
        headers: {
          Authorization: loginToken,
        },
      })
      .then(({ data }) => {
        console.log(data);

        setprofileData(data);
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    if (localStorage.getItem('login-Token') !== null) {
      setLoginToken(localStorage.getItem('login-Token'));
      getProfileData();
      console.log('sss');
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return <p>loading</p>;
  }

  return (
    <div className="page-content">
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">User Profile</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <a href="javascript:;">
                  <i className="bx bx-home-alt"></i>
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                User Profilep
              </li>
            </ol>
          </nav>
        </div>
        <div className="ms-auto">
          <div className="btn-group">
            <button type="button" className="btn btn-primary">
              Settings
            </button>
            <button
              type="button"
              className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
            >
              {' '}
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
              {' '}
              <a className="dropdown-item" href="javascript:;">
                Action
              </a>
              <a className="dropdown-item" href="javascript:;">
                Another action
              </a>
              <a className="dropdown-item" href="javascript:;">
                Something else here
              </a>
              <div className="dropdown-divider"></div>{' '}
              <a className="dropdown-item" href="javascript:;">
                Separated link
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="main-body">
          <div className="row">
            <div className="col-lg-4">
              <ProfileData />
            </div>
            <div className="row col-lg-8">
              <div className="col-lg-12">
                <ProfileSettings />
              </div>
              <div className="col-sm-12">
                <ProjectStatus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
