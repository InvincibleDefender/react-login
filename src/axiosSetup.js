import axios from 'axios';

// Function to create an Axios instance with headers containing API key and secret
const createAxiosInstance = () => {
  const apiKey = localStorage.getItem('apiKey');
  const apiSecret = localStorage.getItem('apiSecret');

  return axios.create({
    baseURL: 'http://127.0.0.1:8000/api/method/bs_customisations.test_api.',
    headers: {
      'Content-Type': 'application/json',
      'Api-Key': apiKey,
      'Api-Secret': apiSecret,
    },
  });
};



export default createAxiosInstance;

// // Usage example in your component
// const YourComponent = () => {
//     const axiosInstance = createAxiosInstance();
  
//     // Use axiosInstance for subsequent API calls
//     // ...
  
//     return (
//       // Your component JSX
//     );
//   };