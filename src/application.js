import React, { useState } from 'react';
import './application.css';

const Popup = ({ decision, setDecision, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Are you sure you want to {decision.toLowerCase()}?</h2>
        <div className="popup-buttons">
          <button onClick={() => setDecision(null)}>Cancel</button>
          <button onClick={onClose}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [decision, setDecision] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleDecision = (decision) => {
    setDecision(decision);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      {showPopup && (
        <div className="overlay">
          <Popup decision={decision} setDecision={setDecision} onClose={handleClosePopup} />
        </div>
      )}
      <div className="buttons">
        <td colSpan={2}>
          <button className='approve' onClick={() => handleDecision('Approved')}>Approve</button>
        </td>
        <td colSpan={3}>
          <button className='decline' onClick={() => handleDecision('Rejected')}>Reject</button>
        </td>
      </div>
    </div>
  );
};

export default App;