import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    backgroundColor: "#E75480",
    width: "100%",
    opacity: 0.9,
  },
};

const ModalComponent = ({ setIsOpen, isOpen, textTitle, textContent }) => {
  function closeModal() {
    setIsOpen(false);
    window.location.reload(false);
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1
          onClick={closeModal}
          style={{ color: "white", opacity: 1, fontWeight: "bold" }}
        >
          {textTitle}
        </h1>
        <h1
          onClick={closeModal}
          style={{ color: "yellow", opacity: 1, fontWeight: "bold" }}
        >
          {textContent}
        </h1>
      </Modal>
    </div>
  );
};

export default ModalComponent;
