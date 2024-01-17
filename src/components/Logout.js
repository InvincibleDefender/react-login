import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';

const Logout = ({showAlert}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        // const key = localStorage.getItem('apiKey'); // Get the token from localStorage or wherever it's stored
        // const secret = localStorage.getItem('apiSecret')
        // const user = localStorage.getItem('useremail')


        // const headers = {
        //   Authorization: `token ${key}:${secret}`, 
        //   'Content-Type': 'application/json',
        // };

        // const params = {
        //   usr:user
        // };

        const response = await axios.post(
        'http://127.0.0.1:8000/api/method/logout',
        //   params,
        //   {
        //     headers: headers,
        //   }
        );
        console.log("yyyyyyyyy",response)
        

        localStorage.removeItem('apiKey');
        localStorage.removeItem('apiSecret');
        localStorage.removeItem('username');
        localStorage.removeItem('useremail');
        localStorage.removeItem('isLoggedIn');

        showAlert('Logged Out Successfully!','success')
            
      
      } catch (error) {
        // Handle errors if any
        console.error('Logout failed:', error);
      }
    };

    logoutUser();
    navigate('/login')
  }, [navigate,showAlert]);


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Logging out...</h3>
              {/* You can add a spinner or loading icon here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
