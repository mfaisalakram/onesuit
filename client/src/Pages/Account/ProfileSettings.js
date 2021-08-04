import React, { useState } from 'react';
import { useEffect } from 'react';

const ProfileSettings = ({ account }) => {
  const [profileData, setProfileData] = useState({
    firstName: account?.firstName,
    lastName: account?.lastName,
    fullName: `${account?.firstName} ${account?.lastName}`,
    email: account?.email,
    adress: account?.token,
  });

  let { firstName, lastName, fullName, email, adress } = profileData;

  // custom functions
  const onChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    console.log('save changes');
  };
  useEffect(() => {}, profileData);
  return (
    <div className="card">
      <div className="card-body">
        <form action="" onSubmit={saveChanges}>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">First Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                type="text"
                className="form-control"
                // value={account?.firstName}
                value={firstName}
                name="firstName"
                onChange={(e) => onChange(e)}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Last Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                type="text"
                className="form-control"
                // value={account?.lastName}
                value={lastName}
                name="lastName"
                onChange={(e) => onChange(e)}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Full Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                type="text"
                className="form-control"
                // value={`${account?.firstName}  ${account?.lastName}`}
                value={fullName}
                name="fullName"
                onChange={(e) => onChange(e)}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Email</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                type="text"
                className="form-control"
                // value={account?.email}
                value={email}
                onChange={(e) => onChange(e)}
                autoComplete="off"
                name="email"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Address</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                onChange={(e) => onChange(e)}
                autoComplete="off"
                type="text"
                className="form-control"
                // value={account?.token}
                value={adress}
                name="adress"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-9 text-secondary">
              <button type="submit" className="btn btn-primary px-4">
                Save Changes{' '}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
