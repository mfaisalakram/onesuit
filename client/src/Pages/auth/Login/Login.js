import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const getData = async () => {
    const responce = await axios.get(
      'https://test-node-samiullah.herokuapp.com/accounts/getallaccounts'
    );
    console.log(responce);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
      <div className="col mx-auto">
        <div className="card">
          <div className="card-body">
            <div className="p-4 rounded">
              <div className="text-center">
                <h3 className="">Sign in</h3>
                <p>
                  Don't have an account yet?{' '}
                  <Link to="/register">Sign up here</Link>
                </p>
              </div>
              <div className="d-grid">
                <a className="btn my-4 shadow-sm btn-white" href="javascript:;">
                  {' '}
                  <span className="d-flex justify-content-center align-items-center">
                    <img
                      className="me-2"
                      src="assets/images/icons/search.svg"
                      width="16"
                      alt="Image Description"
                    />
                    <span>Sign in with Google</span>
                  </span>
                </a>{' '}
                <a href="javascript:;" className="btn btn-facebook">
                  <i className="bx bxl-facebook"></i>Sign in with Facebook
                </a>
              </div>
              <div className="login-separater text-center mb-4">
                {' '}
                <span>OR SIGN IN WITH EMAIL</span>
                <hr />
              </div>
              <div className="form-body">
                <form className="row g-3" onSubmit={(e) => onSubmit(e)}>
                  <div className="col-12">
                    <label for="inputEmailAddress" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmailAddress"
                      placeholder="Email Address"
                      onChange={(e) => onChange(e)}
                      name="email"
                      value={email}
                    />
                  </div>
                  <div className="col-12">
                    <label for="inputChoosePassword" className="form-label">
                      Enter Password
                    </label>
                    <div className="input-group" id="show_hide_password">
                      <input
                        type="password"
                        className="form-control border-end-0"
                        id="inputChoosePassword"
                        value="12345678"
                        placeholder="Enter Password"
                        onChange={(e) => onChange(e)}
                        value={password}
                        name="password"
                      />{' '}
                      <a
                        href="javascript:;"
                        className="input-group-text bg-transparent"
                      >
                        <i className="bx bx-hide"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                        checked=""
                      />
                      <label
                        className="form-check-label"
                        for="flexSwitchCheckChecked"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 text-end">
                    {' '}
                    <a href="authentication-forgot-password.html">
                      Forgot Password ?
                    </a>
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        <i className="bx bxs-lock-open"></i>Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
