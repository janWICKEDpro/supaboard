import React from 'react';
import '../CreateBoard.css';

function CreateBoard() {
  return (
    <div className='board-container'>
      <div className='first-texts'>
        <h1>My Whiteboards</h1>
        <button className='form-input'>SignOut</button>
      </div>
      <div className='create-board-box'>
        <h2>Create New WhiteBoard</h2>
        <h3>Start a new collaborative whiteboard session</h3>
        <div className='create-form-contiainer'>
          <input type="text" className='create-form-input' placeholder='Enter board name'/>
          <button className='create-form-button'>Create Board</button>
        </div>
      </div>
      <div className='join-board-box'>
        <h2>Join A WhiteBoard</h2>
        <h3>Join a whiteboard to start collaborating with friends</h3>
        <div className='join-form-contiainer'>
          <input type="text" className='join-form-input' placeholder='Enter Code'/>
          <button className='join-form-button'>Join</button>
        </div>
      </div>
    </div>
  );
}

export default CreateBoard;