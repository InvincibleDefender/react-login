import React from 'react';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto text-center mt-5">
          <h1>Welcome to My Awesome App</h1>
          <p className="lead">Where creativity meets technology</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Feature 1</h5>
              <p className="card-text">Description of Feature 1 goes here</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Feature 2</h5>
              <p className="card-text">Description of Feature 2 goes here</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Feature 3</h5>
              <p className="card-text">Description of Feature 3 goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
