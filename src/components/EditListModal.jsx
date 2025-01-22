import React, { useEffect, useState } from "react";
import { editUser } from '../api/admin';

const EditListModal = ({ user, onClose, onRefresh }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  
    status: 'Active',
   
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
     
        status: user.isActive ? 'Active' : 'Inactive',
        
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!user || !user._id) {
        throw new Error("User ID is undefined");
      }

      await editUser(formData, user._id);
      onClose();
      onRefresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-50 fixed inset-0 z-50">
      <div className="bg-white w-[800px] rounded-lg shadow-lg relative rounded-e-2xl rounded-s-2xl">
        <button
          className="absolute top-2 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <span className="text-xl">&times;</span>
        </button>
        <h2 className="text-xl font-bold mb-4 text-center bg-[#043B64] text-white p-4 rounded-t-2xl">View & Edit List</h2>
        <form className="space-y-4 p-14" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block p-2 w-full rounded-md border-gray-600 border-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block p-2 w-full rounded-md border-gray-600 border-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="mt-1 block p-2 w-full rounded-md border-gray-600 border-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            
          </div>
          <div>
            
          </div>
          <div className="text-center flex justify-center">
          <button
            type="submit"
            className="text-center p-4 flex justify-center bg-[#043B64] text-white py-2 rounded-sm shadow-sm hover:bg-[#043B64] focus:ring-2 focus:ring-blue-500"
          >
            Save Changes
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditListModal;