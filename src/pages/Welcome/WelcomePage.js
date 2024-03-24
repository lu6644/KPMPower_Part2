import React, { useEffect, useState } from 'react';
import './Welcome.css';

function WelcomePage() {
  const [users, setUsers] = useState([]);
  const username = sessionStorage.getItem('username');  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="welcome-container">
      <h1 class="welcome-note">Welcome, {username}</h1> {/* Display the username */}
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>user name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WelcomePage;
