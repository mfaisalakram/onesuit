import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import AsyncLocalStorage from '@createnextapp/async-local-storage';
import { useToasts } from 'react-toast-notifications';
import { useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';

import { LoginContext } from '../../Context/loginContext';

import { Form, Formik, ErrorMessage, Field } from 'formik';

import * as Yup from 'yup';

const AddTicket = (props) => {
  const { state } = useLocation();

  const navigate = useNavigate();
  const { addToast } = useToasts();
  const { loginTokenContext, setLoginTokenContext, setPageTitle } =
    useContext(LoginContext);
  const getToken = async () => {
    let token;
    try {
      token = await AsyncLocalStorage.getItem('login-Token');
      setLoginTokenContext(token);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (loginTokenContext == '') {
      getToken();
    }

    if (state == null) {
      setPageTitle('Add Ticket');
    } else {
      setPageTitle('Update Ticket');
    }
  }, [loginTokenContext, state]);

  {
    if (state == null) {
      return (
        <div className="card">
          <div className="card-body">
            <Formik
              initialValues={{
                name: '',
              }}
              validationSchema={Yup.object({
                name: Yup.string().required('Title is required'),
              })}
              onSubmit={(data) => {
                try {
                  axios
                    .post(
                      'https://test-node-samiullah.herokuapp.com/tickets/addtickettype',
                      data,
                      {
                        headers: {
                          Authorization: loginTokenContext,
                        },
                      }
                    )
                    .then((response) => {
                      if (response.status === 201) {
                        addToast('Saved Successfully', {
                          appearance: 'success',
                          autoDismiss: true,
                        });
                        navigate('/app/incidentmanagement/allTickets');
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
            >
              <Form>
                <div className="row mb-3">
                  <div className="mb-3 col-sm-3">
                    <h6 className="mb-0">Ticket Title</h6>
                  </div>
                  <div className="col-sm-12 text-secondary">
                    <Field
                      autoCompelete="off"
                      type="text"
                      className="form-control"
                      autoCompelete="off"
                      name="name"
                      autoCompelete="off"
                    />
                    <ErrorMessage name="name" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-9 text-secondary">
                    <button type="submit" className="btn btn-primary px-4">
                      Save
                      <i
                        style={{ fontSize: '17px', marginLeft: '5px' }}
                        className="fas fa-share-square"
                      ></i>
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card">
          <div className="card-body">
            <Formik
              initialValues={{
                name: state?.Name,
              }}
              validationSchema={Yup.object({
                name: Yup.string().required('Required Field'),
              })}
              onSubmit={(data) => {
                console.log(data);
                try {
                  axios
                    .put(
                      'https://test-node-samiullah.herokuapp.com/tickets/updateTicketType',
                      {
                        TicketId: state?.TicketId,
                        name: data?.name,
                      },
                      {
                        headers: {
                          Authorization: loginTokenContext,
                        },
                      }
                    )
                    .then((response) => {
                      console.log(response);
                      if (response.status === 200) {
                        addToast('Update Successfully', {
                          appearance: 'success',
                          autoDismiss: true,
                        });
                        navigate('/app/incidentmanagement/allTickets');
                      } else {
                        addToast('jjjkjkj', {
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
            >
              <Form>
                <div className="row mb-3">
                  <div className="mb-3 col-sm-3">
                    <h6 className="mb-0">Update Ticket</h6>
                  </div>
                  <div className="col-sm-12 text-secondary">
                    <Field
                      autoCompelete="off"
                      type="text"
                      className="form-control"
                      autoCompelete="off"
                      name="name"
                      autoCompelete="off"
                    />
                    <ErrorMessage name="updateName" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-9 text-secondary">
                    <button type="submit" className="btn btn-primary px-4">
                      Update
                      <i
                        style={{ fontSize: '17px', marginLeft: '5px' }}
                        className="fas fa-edit"
                      ></i>
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      );
    }
  }
};

export default AddTicket;
