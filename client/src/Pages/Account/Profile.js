import React, { useEffect, useState, useContext } from 'react';
import AsyncLocalStorage from '@createnextapp/async-local-storage';
import { LoginContext } from '../../Context/loginContext';
import { ToastProvider } from 'react-toast-notifications';

import axios from 'axios';

import ProfileSettings from './ProfileSettings';
import ProjectStatus from './ProjectStatus';
import ProfileData from './ProfileData';

const Profile = () => {
  const { loginTokenContext, setLoginTokenContext, setUserBoxData } =
    useContext(LoginContext);
  const [isLoading, setLoading] = useState(false);
  const [profileUpdate, setProfileUpdate] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  });

  let [profileData, setProfileData] = useState({});

  const getProfileData = async () => {
    if (loginTokenContext !== '') {
      try {
        const api_result = await axios.get(
          'https://test-node-samiullah.herokuapp.com/accounts/getAccount',
          {
            headers: {
              Authorization: loginTokenContext,
            },
          }
        );

        setProfileData(api_result.data.Account);
        setProfileUpdate({
          firstName: api_result.data?.Account?.firstName,
          lastName: api_result.data?.Account?.lastName,
          email: api_result.data?.Account?.email,
          address: api_result.data?.Account?.address,
        });
        setUserBoxData({
          firstName: api_result.data?.Account?.firstName,
          lastName: api_result.data?.Account?.lastName,
          email: api_result.data?.Account?.email,
          address: api_result.data?.Account?.address,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      getToken();
    }
    //  test comment
  };

  const getToken = async () => {
    let token;
    try {
      token = await AsyncLocalStorage.getItem('login-Token');
      setLoginTokenContext(token);

      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfileData();
  }, [isLoading]);

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
                User Profile
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
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
              <a className="dropdown-item" href="javascript:;">
                Action
              </a>
              <a className="dropdown-item" href="javascript:;">
                Another action
              </a>
              <a className="dropdown-item" href="javascript:;">
                Something else here
              </a>
              <div className="dropdown-divider"></div>
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
              <ProfileData title={profileUpdate} account={profileData} />
            </div>
            <div className="row col-lg-8">
              <div className="col-lg-12">
                <ToastProvider>
                  <ProfileSettings
                    setTitle={setProfileUpdate}
                    account={profileData}
                  />
                </ToastProvider>
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
