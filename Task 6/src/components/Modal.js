import React from 'react';
import './Modal.css';

const Modal = ({ src, onClose, onNavigate }) => {
  return (
    <div className="modal">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <button className="prev" onClick={() => onNavigate(-1)}>
        &#10094;
      </button>
      <img className="modal-content" src={src} alt="" />
      <button className="next" onClick={() => onNavigate(1)}>
        &#10095;
      </button>
    </div>
  );
};

export default Modal;