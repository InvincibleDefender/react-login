import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileDashboard = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const key = localStorage.getItem('apiKey');
        const secret = localStorage.getItem('apiSecret');
        const user = localStorage.getItem('useremail');

        const headers = {
          Authorization: `token ${key}:${secret}`,
          'Content-Type': 'application/json',
        };
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/method/bs_customisations.test_api.dashboard?usr=${user}`,{headers:headers});
        const userData = response.data.data[0];
        setUserData(userData);
        setLoading(false);
      } catch (error) {
        setError('Error fetching user data');
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Hello, {userData.full_name}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Profile Details</h5>
            <p className="card-text"><strong>Email:</strong> {userData.email}</p>
            {/* Add more user details as needed */}
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDashboard;
