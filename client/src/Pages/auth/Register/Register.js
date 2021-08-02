import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// validation
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Register = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
    countryy: Yup.string().required('Country is required'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

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

  useEffect(() => {}, []);

  return (
    <div class="col mx-auto">
      <div class="card">
        <div class="card-body">
          <div class="p-4 rounded">
            <div class="text-center">
              <h3 class="">Sign Up</h3>
              <p>
                <Link to="/join/login">Sign in here</Link>
              </p>
              <span class="d-flex justify-content-center align-items-center">
                <img
                  class="me-2"
                  src="/assets/images/icons/search.svg"
                  width="16"
                  alt="Image Description"
                />
                <span>Sign Up with Google</span>
              </span>

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
  );
};

export default Register;
