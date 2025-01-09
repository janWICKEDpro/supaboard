import React from 'react';
import '../Auth.css';
import { Link } from 'react-router';


function Auth() {
  return (
    <div className='wrap-container'>
      <div className='box'>
        <h2>Welcome to SupaBoard</h2>
        <h3>Enter your name to start collaborating</h3>
        <div className='form-contiainer'>
          <input type="text" className='form-input' placeholder='Enter your name'/>
          <Link to='/create-board'><button className='form-button'>Continue</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Auth;