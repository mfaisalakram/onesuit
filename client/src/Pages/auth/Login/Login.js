import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AsyncLocalStorage from '@createnextapp/async-local-storage';

import axios from 'axios';

//loader
import Loader from '../Loader/Loader';

// form validation
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Call Name is required'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const getData = async (data) => {
    setLoading(true);
    const responce = await axios
      .post('https://test-node-samiullah.herokuapp.com/accounts/login', {
        username: data.email,
        password: data.password,
      })
      .then(async (result) => {
        if (result.status == 200 && result.data.status == 'success') {
          // localStorage.setItem("login-Token", result.data.token)
          await AsyncLocalStorage.setItem('login-Token', result.data.token);
          navigate('/app/profile');
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {}, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="p-4 rounded">
          <div className="text-center">
            <h3 className="">Sign in</h3>
            <p>
              Don't have an account yet?{' '}
              <Link to="/join/register">Sign up here</Link>
            </p>
          </div>
          <div className="d-grid">
            <a className="btn my-4 shadow-sm btn-white" href="javascript:;">
              {' '}
              <span className="d-flex justify-content-center align-items-center">
                <img
                  className="me-2"
                  src="/assets/images/icons/search.svg"
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
            <form
              className="row g-3"
              onSubmit={handleSubmit((data) => {
                getData(data);
              })}
              onReset={reset}
            >
              <div className="col-12">
                <label for="inputEmailAddress" className="form-label">
                  Email Address
                </label>
                <input
                  className="form-control"
                  autoComplete="off"
                  {...register('email')}
                />
                <p style={{ color: 'red' }}>{errors.email?.message}</p>
              </div>
              <div className="col-12">
                <label for="inputChoosePassword" className="form-label">
                  Enter Password
                </label>
                <div className="input-group" id="show_hide_password">
                  <input
                    type="password"
                    className="form-control border-end-0"
                    name="password"
                    autoComplete="off"
                    {...register('password')}
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
                    <i className="bx bxs-lock-open"></i>
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
