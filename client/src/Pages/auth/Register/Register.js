import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
  });

  const { firstName, lastName, email, password, country } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div class="d-flex align-items-center justify-content-center my-5 my-lg-0">
      <div class="container">
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
          <div class="col mx-auto">
            <div class="card">
              <div class="card-body">
                <div class="p-4 rounded">
                  <div class="text-center">
                    <h3 class="">Sign Up</h3>
                    <p>
                      Already have an account?{' '}
                      <Link to="/login">Sign in here</Link>
                    </p>
                  </div>
                  <div class="d-grid">
                    <a class="btn my-4 shadow-sm btn-white" href="javascript:;">
                      {' '}
                      <span class="d-flex justify-content-center align-items-center">
                        <img
                          class="me-2"
                          src="assets/images/icons/search.svg"
                          width="16"
                          alt="Image Description"
                        />
                        <span>Sign Up with Google</span>
                      </span>
                    </a>{' '}
                    <a href="javascript:;" class="btn btn-facebook">
                      <i class="bx bxl-facebook"></i>Sign Up with Facebook
                    </a>
                  </div>
                  <div class="login-separater text-center mb-4">
                    {' '}
                    <span>OR SIGN UP WITH EMAIL</span>
                    <hr />
                  </div>
                  <div class="form-body">
                    <form class="row g-3" onSubmit={(e) => onSubmit(e)}>
                      <div class="col-sm-6">
                        <label for="inputFirstName" class="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputFirstName"
                          placeholder="Jhon"
                          onChange={(e) => onChange(e)}
                          name="firstName"
                          value={firstName}
                        />
                      </div>
                      <div class="col-sm-6">
                        <label for="inputLastName" class="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputLastName"
                          placeholder="Deo"
                          onChange={(e) => onChange(e)}
                          name="lastName"
                          value={lastName}
                        />
                      </div>
                      <div class="col-12">
                        <label for="inputEmailAddress" class="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmailAddress"
                          placeholder="example@user.com"
                          onChange={(e) => onChange(e)}
                          name="email"
                          value={email}
                        />
                      </div>
                      <div class="col-12">
                        <label for="inputChoosePassword" class="form-label">
                          Password
                        </label>
                        <div class="input-group" id="show_hide_password">
                          <input
                            type="password"
                            class="form-control border-end-0"
                            id="inputChoosePassword"
                            placeholder="Enter Password"
                            onChange={(e) => onChange(e)}
                            name="password"
                            value={password}
                          />{' '}
                          <a
                            href="javascript:;"
                            class="input-group-text bg-transparent"
                          >
                            <i class="bx bx-hide"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="inputSelectCountry" class="form-label">
                          Country
                        </label>
                        <select
                          class="form-select"
                          id="inputSelectCountry"
                          aria-label="Default select example"
                          onChange={(e) => onChange(e)}
                          name="country"
                          value={country}
                        >
                          <option selected="">Pakistan</option>
                          <option value="1">United Kingdom</option>
                          <option value="2">America</option>
                          <option value="3">Dubai</option>
                        </select>
                      </div>

                      <div class="col-12">
                        <div class="d-grid">
                          <button type="submit" class="btn btn-primary">
                            <i class="bx bx-user"></i>Sign up
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
      </div>
    </div>
  );
};

export default Register;
