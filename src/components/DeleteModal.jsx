import React from 'react';

const DeleteModal = ({ onConfirm, onClose, user }) => {
  if (!user) return null; // Prevent rendering the modal if no user is selected

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h3 className="text-xl font-semibold">Are you sure you want to delete {user.name}?</h3>
        <div className="mt-4 flex justify-between">
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
