import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
// import Alert from './Alert';


const Login = ({ showAlert }) => {
  // console.log("Loginnnnnnn", showAlert)
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [loginError, setLoginError] = useState(false);
  // const [alert, setAlert] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault();
    try {

      if(!username && !password){
        showAlert('Username and Password is Required!', 'danger');
        return
      }

      if(!username){
        showAlert( 'Username is Required!',  'danger');
        return
      }

      if(!password){
        showAlert( 'Password is Required!', 'danger');
        return
      }

      const response = await axios.post(
        'http://127.0.0.1:8000/api/method/bs_customisations.test_api.login',
        {
          usr: username,
          pwd: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          // withCredentials: true,
        }
      );
  
      const { api_key, api_secret, success_key } = response.data.message;

  
      if (success_key === 0) {
        console.error('Invalid credentials');
        showAlert('Invalid credentials',  'danger');

      } else {
        setIsLoggedIn(true)
        localStorage.setItem('apiKey', api_key);
        localStorage.setItem('apiSecret', api_secret);
        localStorage.setItem('username', response.data.message.username);
        localStorage.setItem('useremail', response.data.message.email);
        localStorage.setItem('isLoggedIn', isLoggedIn);

        showAlert('Logged In Successfully!','success' );
  
        navigate('/blogs');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
