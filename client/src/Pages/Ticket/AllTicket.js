import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import AsyncLocalStorage from '@createnextapp/async-local-storage';
import { LoginContext } from '../../Context/loginContext';

import axios from 'axios';

const AllTickets = (props) => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(true);
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
  const [title, setTitle] = useState([]);

  const getData = () => {
    axios
      .get('https://test-node-samiullah.herokuapp.com/tickets/gettickettype', {
        headers: {
          Authorization: loginTokenContext,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setTitle(response?.data?.TicketTypes);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTicket = (TicketId) => {
    axios
      .delete(
        'https://test-node-samiullah.herokuapp.com/tickets/RemoveTicketType/' +
          TicketId,
        {
          headers: {
            Authorization: loginTokenContext,
          },
        }
      )
      .then(() => {
        setFlag(!flag);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (loginTokenContext === '') {
      getToken();
    } else {
      getData();
    }
    setPageTitle('All Tickets');
  }, [loginTokenContext, flag]);

  return (
    <div class="card-body">
      <Link to="/app/incidentmanagement/addTicket">
        <button className="btn btn-primary px-4 mb-5 ">
          Add New
          <i
            style={{ fontSize: '18  px', marginLeft: '5px' }}
            className="fas fa-plus"
          ></i>
        </button>
      </Link>
      <table style={{ backgroundColor: '#F1E6FF' }} class="table mb-0">
        <thead>
          <tr>
            <th scope="col">Serial No</th>
            <th scope="col">Ticket Title </th>
          </tr>
        </thead>
        <tbody>
          {title?.map(({ name, _id }, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>

                <button
                  onClick={() =>
                    navigate('/app/incidentmanagement/addTicket', {
                      state: {
                        TicketId: _id,
                        Name: name,
                      },
                    })
                  }
                  clickID={_id}
                  style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    outline: 'none',
                  }}
                >
                  <i
                    style={{
                      border: 'none',
                      outline: 'none',
                      backgroundColor: 'transparent',
                      fontSize: '20px',
                      color: '#8833FF',
                    }}
                    className="fas fa-edit"
                  ></i>
                </button>

                <button
                  onClick={() => deleteTicket(_id)}
                  style={{
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'transparent',
                  }}
                >
                  <i
                    style={{
                      border: 'none',
                      outline: 'none',
                      backgroundColor: 'transparent',
                      fontSize: '20px',
                      color: '#8833FF',
                    }}
                    className="far fa-trash-alt"
                  ></i>
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllTickets;
