import axios from "axios";
import React, { useRef } from "react";

const DeleteWarningModal = ({ onClose,onYes }) => {
    const modalRef = useRef();
    const closeModal = (e) => {
        if(modalRef.current === e.target){
          onClose();
        }
      }

  return (
    <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center h-screen">
      <div className="bg-gray-600 flex flex-col items-center justify-center gap-8 p-9 rounded-xl">
        <h1 className="text-white">
          Are You Sure You Want To Delete This Staff Member ?
        </h1>
        <div className="flex flex-row gap-4">
          <button onClick={onYes} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300">
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteWarningModal;
