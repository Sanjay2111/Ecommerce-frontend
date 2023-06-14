import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/api/users/login',
        {
          userName,
          password,
        }
      );

      if (response.status === 200) {
        const user = response.data;
        alert(`Welcome, ${user.userName}!`);
        navigate('/product-list');
      } else if (response.status === 401) {
        alert('Invalid password');
      } else if (response.status === 404) {
        alert('User not found');
      } else {
        alert('An error occurred during login. Please try again.');
      }
    } catch (error) {
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="text-center">
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              id="username"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control"
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
