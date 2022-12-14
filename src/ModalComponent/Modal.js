import React from 'react';
import './Modal.css';
const Modal = ({ setOpenModal, data, component }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>THIS IS: {data}</h1>
          <h1>FROM: {component}</h1>
        </div>
        <div className="body">
          <p>Wow 😲 looks amazing. Assessment Task of Junayed !</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
