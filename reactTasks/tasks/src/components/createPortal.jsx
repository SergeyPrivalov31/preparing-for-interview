import React, { useState } from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line react/prop-types
const Modal = ({ onClose }) => {
  console.log("tick");
  return (
    <div className="modal-root">
      <h2>Modal Title</h2>
      <p>Modal content goes here.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const CreatePortal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Portal App</h1>
      <button onClick={handleShowModal}>Show Modal</button>
      {showModal &&
        ReactDOM.createPortal(
          <div>
            <Modal onClose={handleCloseModal} />
          </div>,
          document.getElementById("modal")
        )}
    </div>
  );
};

export default CreatePortal;
