import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';

import axios from 'axios';

import { LoginContext } from '../../Context/loginContext';

import { Form, Formik, ErrorMessage, Field } from 'formik';

import * as Yup from 'yup';

const ProfileSettings = ({ setTitle, account }) => {
  const { addToast } = useToasts();
  const { loginTokenContext } = useContext(LoginContext);
  const [profileData, setProfileData] = useState();

  useEffect(() => {
    if (account) {
      setProfileData(account);
    }
  }, [account]);
  return (
    <div className="card">
      <div className="card-body">
        <Formik
          initialValues={{
            firstName: profileData?.firstName,
            lastName: profileData?.lastName,
            email: profileData?.email,
            address: profileData?.address,
            username: profileData?.username,
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required('firstName is required'),
            lastName: Yup.string().required('lastName is required'),
            username: Yup.string().required('fullName is required'),
            email: Yup.string().email().required('email is required'),
            address: Yup.string().required('address is required'),
          })}
          onSubmit={(data, { resetForm }) => {
            try {
              axios
                .post(
                  'https://test-node-samiullah.herokuapp.com/accounts/updateProfile',
                  data,
                  {
                    headers: {
                      Authorization: loginTokenContext,
                    },
                  }
                )
                .then((response) => {
                  if (response.status === 200) {
                    setTitle({
                      firstName: data.firstName,
                      lastName: data.lastName,
                      email: data.email,
                      address: data.address,
                    });
                    addToast('Saved Successfully', {
                      appearance: 'success',
                      autoDismiss: true,
                    });
                  } else {
                    addToast('Oops!! Error while saving!!', {
                      appearance: 'error',
                      autoDismiss: true,
                    });
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            } catch (err) {
              console.log(err);
            }
          }}
          enableReinitialize
        >
          <Form>
            <div className="row mb-3">
              <div className="col-sm-3">
                <h6 className="mb-0">First Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <Field type="text" className="form-control" name="firstName" />
                <ErrorMessage name="firstName" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3">
                <h6 className="mb-0">Last Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <Field type="text" name="lastName" className="form-control" />
                <ErrorMessage name="lastName" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3">
                <h6 className="mb-0">Username</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <Field type="text" className="form-control" name="username" />
                <ErrorMessage name="username" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <Field type="text" className="form-control" name="email" />
                <ErrorMessage name="email" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                <Field
                  autoComplete="off"
                  type="text"
                  className="form-control"
                  name="address"
                />
                <ErrorMessage name="address" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-9 text-secondary">
                <button type="submit" className="btn btn-primary px-4">
                  Update
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ProfileSettings;
