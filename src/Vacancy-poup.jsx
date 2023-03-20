import React from 'react';

 const PopUpDialog = ({ decision, setDecision, submitDecision, onClose }) => {
  const handleApprove = () => {
    setDecision('Approved');
    submitDecision();
    onClose();
  };

  const handleReject = () => {
    setDecision('Rejected');
    submitDecision();
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Confirm Decision</h2>
        <p>Are you sure you want to {decision.toLowerCase()}?</p>
        <div className="buttons">
          <button className="confirm" onClick={handleApprove}>Confirm</button>
          <button className="cancel" onClick={handleReject}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default PopUpDialog;