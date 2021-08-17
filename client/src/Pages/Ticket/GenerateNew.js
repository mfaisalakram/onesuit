import React, { useState, useContext, useEffect } from 'react';
import AsyncLocalStorage from '@createnextapp/async-local-storage';
import axios from 'axios';

import { LoginContext } from '../../Context/loginContext';

import { useToasts } from 'react-toast-notifications';

import { Form, Formik, ErrorMessage, Field } from 'formik';

import * as Yup from 'yup';

import { useNavigate } from 'react-router-dom';

const GenerateNew = (prop) => {
  //
  const navigate = useNavigate();
  const { addToast } = useToasts();
  //
  const [types, setTypes] = useState([]);
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

  const getTicketTypes = async () => {
    try {
      await axios
        .get(
          'https://test-node-samiullah.herokuapp.com/tickets/gettickettype',
          {
            headers: {
              Authorization: loginTokenContext,
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            setTypes(response?.data?.TicketTypes);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loginTokenContext == '') {
      getToken();
    } else {
      getTicketTypes();
    }
  }, [loginTokenContext]);

  return (
    <div>
      <h2 style={{ color: '#8833FF' }}> Generate Tickets</h2>
      <div className="card">
        <div className="card-body">
          <Formik
            initialValues={{
              name: '',
              type: '',
              description: '',
            }}
            validationSchema={Yup.object({
              Title: Yup.string().required('Title is required'),
              Description: Yup.string().required('Description is required'),
            })}
            onSubmit={(data) => {
              try {
                axios
                  .post(
                    'https://test-node-samiullah.herokuapp.com/ticketCenter/addticket',
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
                      navigate('/app/incidentmanagement/ticketCenter');
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
                  <h6 className="mb-0">Ticket Type</h6>
                </div>
                <div className="col-sm-12 text-secondary">
                  <Field
                    style={{
                      border: '2px solid #F1E6FF',
                      outline: 'none',
                      borderRadius: '4px',
                      padding: '8px',
                    }}
                    className="col-sm-12 text-secondary"
                    as="select"
                    name="TicketTypeId"
                  >
                    <option value="" selected="selected" hidden>
                      Select Ticket type
                    </option>

                    {types.map((item, index) => {
                      return (
                        <option key={index} value={item._id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage name="type" />
                </div>
              </div>
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
                    name="Title"
                    autoCompelete="off"
                  />
                  <ErrorMessage name="Title" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="mb-3 col-sm-3">
                  <h6 className="mb-0">Description </h6>
                </div>
                <div className="col-sm-12 text-secondary">
                  <Field
                    autoCompelete="off"
                    type="textarea"
                    className="form-control"
                    autoCompelete="off"
                    name="Description"
                    autoCompelete="off"
                    placeholder="description..."
                  />
                  <ErrorMessage name="Description" />
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
    </div>
  );
};

export default GenerateNew;
