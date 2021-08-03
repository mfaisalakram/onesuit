import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

// validation
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Register = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(' Firstname is Required'),
    lastName: Yup.string().required(' Lastname is Required'),
    userName: Yup.string().required(' Username is Required'),
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
    // country: Yup.string().required('Country is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  // alert
  const showAlert = () => {
    const alert = document.getElementsByClassName('alert');
    if (alert.style.display === 'none') {
      return (alert.style.display = 'block');
    } else {
      return (alert.style.display = 'none');
    }
  };

  const getData = async (data) => {
    const responce = await axios
      .post(
        'https://test-node-samiullah.herokuapp.com/accounts/getRegistered',
        {
          firstName: data.firstName,
          lastName: data.lastName,
          username: data.userName,
          email: data.email,
          password: data.password,
        }
      )
      .then((result) => {
        if (result.status == 201 && result.data.status == 'success') {
          // showAlert();
          navigate('/join/login');
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {}, []);

  // style for firstName and LastName

  const mystyle = {
    color: 'red',
    fontSize: '12px',
  };

  const alert = {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '15px',
    margin: '20px',
    borderRadius: '3px',
    textAlign: 'center',
    fontWeight: 'bold',
    // display: 'none',
  };

  return (
    <div className="col mx-auto">
      <div id="alert" className="alert" style={alert}>
        User Register Register Successfully
      </div>

      <div className="card">
        <div className="card-body">
          <div className="p-4 rounded">
            <div className="text-center">
              <h3 className="">Sign Up</h3>
              <p>
                Have an account yet? <Link to="/join/login">Sign in here</Link>
              </p>

              <a className="btn my-4 shadow-sm btn-white" href="javascript:;">
                {' '}
                <span className="d-flex justify-content-center align-items-center">
                  <img
                    className="me-2"
                    src="/assets/images/icons/search.svg"
                    width="16"
                    alt="Image Description"
                  />
                  <span>Sign Up with Google</span>
                </span>
              </a>

              <a href="javascript:;" className="btn btn-facebook">
                <i className="bx bxl-facebook"></i>Sign Up with Facebook
              </a>
            </div>

            <div className="login-separater text-center mb-4">
              {' '}
              <span>OR SIGN UP WITH EMAIL</span>
              <hr />
            </div>
            <div className="form-body">
              <form
                className="row g-3"
                onSubmit={handleSubmit((e) => getData(e))}
              >
                <div className="col-sm-6">
                  <label for="inputLastName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="Firstname"
                    name="firstName"
                    {...register('firstName')}
                    autoComplete="off"
                  />
                  <p style={mystyle}>{errors.firstName?.message}</p>
                </div>{' '}
                <div className="col-sm-6">
                  <label for="inputLastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="Lastname"
                    name="lastName"
                    {...register('lastName')}
                    autoComplete="off"
                  />
                  <p style={mystyle}>{errors.lastName?.message}</p>
                </div>
                <div className="col-sm-12">
                  <label for="inputLastName" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    {...register('userName')}
                    autoComplete="off"
                  />
                  <p style={{ color: 'red' }}>{errors.userName?.message}</p>
                </div>
                <div className="col-12">
                  <label for="inputEmailAddress" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmailAddress"
                    placeholder="example@user.com"
                    name="email"
                    {...register('email')}
                    autoComplete="off"
                  />
                  <p style={{ color: 'red' }}>{errors.email?.message}</p>
                </div>
                <div className="col-12">
                  <label for="inputChoosePassword" className="form-label">
                    Password
                  </label>
                  <div className="input-group" id="show_hide_password">
                    <input
                      type="password"
                      className="form-control border-end-0"
                      id="inputChoosePassword"
                      placeholder="Enter Password"
                      name="password"
                      {...register('password')}
                      autoComplete="off"
                    />

                    <a
                      href="javascript:;"
                      className="input-group-text bg-transparent"
                    >
                      <i className="bx bx-hide"></i>
                    </a>
                  </div>
                  <p style={{ color: 'red' }}>{errors.password?.message}</p>
                </div>
                {/* <div className="col-12">
                  <label for="inputSelectCountry" className="form-label">
                    Country
                  </label>
                  <select
                    className="form-select"
                    id="inputSelectCountry"
                    aria-label="Default select example"
                    name="country"
                    {...register('country')}
                    autoComplete="off"
                  >
                    <option selected="">Pakistan</option>
                    <option value="1">United Kingdom</option>
                    <option value="2">America</option>
                    <option value="3">Dubai</option>
                  </select>
                </div>
                <p style={{ color: 'red' }}>{errors.country?.message}</p> */}
                <div className="col-12">
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      <i className="bx bx-user"></i>Sign up
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
