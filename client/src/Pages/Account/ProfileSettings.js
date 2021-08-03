import React, { useState } from 'react';

const ProfileSettings = () => {
  const [profileData, setProfileData] = useState({
    fullName: 'Faisal Akram',
    email: 'faisalakram1133@gmail.com',
    phone: '0324-8484999',
    mobile: '042 5042231',
    adress: 'Upper Mall Lahore',
  });
  const { fullName, email, phone, mobile, adress } = profileData;

  // custom functions
  const onChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    console.log('ssave changes');
  };

  return (
    <div className="card">
      <div className="card-body">
        <form action="" onSubmit={saveChanges}>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Full Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                type="text"
                className="form-control"
                value={fullName}
                name="fullName"
                onChange={(e) => onChange(e)}
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
                value={email}
                onChange={(e) => onChange(e)}
                name="email"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Phone</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                type="text"
                className="form-control"
                value={phone}
                name="phone"
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Mobile</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                type="text"
                className="form-control"
                value={mobile}
                name="mobile"
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-3">
              <h6 className="mb-0">Address</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input
                type="text"
                className="form-control"
                value={adress}
                name="adress"
                onChange={(e) => onChange(e)}
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
