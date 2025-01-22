import React from 'react'

const DeleteTaskModel = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6">
      <h2 className="text-lg font-semibold text-center text-gray-900 mb-4">
        Are you sure you want to delete this task?
      </h2>
      <div className="flex justify-between">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800"
          onClick={onConfirm}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
  )
}

export default DeleteTaskModel

