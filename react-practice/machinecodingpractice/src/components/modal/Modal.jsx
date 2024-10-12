import { useState } from 'react';
import './Modal.css'; // Import your CSS file for styling

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render the modal if not open

  const handleOverlayClick = (e) => {
    // Close modal on overlay click
    onClose();
    e.stopPropagation(); // Prevent the click from bubbling up
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Modal Title</h2>
        <p>This is a simple modal example.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const ModalPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>React Pop-Up Modal Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ModalPopup;
