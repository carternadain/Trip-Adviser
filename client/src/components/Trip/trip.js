import React from 'react';
import './Trip.css';

function Trip() {
  return (
    <div className="form-container" >
      <form className="form-center">
        <label>From:</label>
        <input type="text" placeholder="Enter starting location" className="form-control"/>
        <br />
        <label>To:</label>
        <input type="text" placeholder="Enter destination location" className="form-control"/>
        <br />
        <button className="btn btn-primary">Go</button>
      </form>
    </div>
  );
}

export default Trip;
