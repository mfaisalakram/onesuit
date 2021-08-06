import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllAccounts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://test-node-samiullah.herokuapp.com/accounts/getAllAccounts')
      .then((res) => {
        setData(res?.data?.Account);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div class="card-body">
      <table
        style={{ backgroundColor: '#F1E6FF' }}
        class="table mb-0  table-striped"
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name </th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ firstName, lastName, email, username }, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{username}</td>
                <td>{email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllAccounts;
