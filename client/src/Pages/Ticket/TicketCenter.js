import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import AsyncLocalStorage from '@createnextapp/async-local-storage';
import { LoginContext } from '../../Context/loginContext';

import axios from 'axios';

const TicketCenter = (props) => {
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
      .get(
        'https://test-node-samiullah.herokuapp.com/ticketCenter/alltickets',
        {
          headers: {
            Authorization: loginTokenContext,
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setTitle(response?.data?.tickets);

          //  single   // setTitle(response?.data?.tickets[1]?.Title);

          console.log(title);
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
    setPageTitle('Generated Tickets');
  }, [loginTokenContext, flag]);

  return (
    <div className="card-body">
      <Link to="/app/incidentmanagement/generateNew">
        <button className="btn btn-primary px-4 mb-5 ">
          Generate new
          <i
            style={{ fontSize: '18px', marginLeft: '5px' }}
            className="fas fa-plus"
          ></i>
        </button>
      </Link>
      <table style={{ backgroundColor: '#F1E6FF' }} className="table mb-0">
        <thead>
          <tr>
            <th scope="col">Serial No</th>
            <th scope="col">Ticket Title </th>
            <th scope="col">Ticket Type </th>
          </tr>
        </thead>
        <tbody>
          {title?.map(({ Title, Description, _id }, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  {Title}
                  {/* ( <small> {Description} </small>) */}
                </td>

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

export default TicketCenter;
