import React, { useState } from "react";
import CreateTaskModal from "../components/CreateTaskModal";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSave = (data) => {
    console.log("Task Data:", data);
    setIsModalOpen(false); // Close the modal after saving
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <h1 className="font-extrabold text-5xl text-blue-950 mb-8">Create a Task</h1>
      
      {/* Box Styling */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md border border-gray-200">
        <p className="text-lg text-center font-medium text-gray-700 mb-6">
          Click the button below to create a new task.
        </p>
        <div className="flex justify-center">
          <div
            className="flex items-center justify-center w-12 h-12 bg-blue-950 text-white cursor-pointer text-xl font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            +
          </div>
        </div>

       
      </div>
      <button className="bg-blue-950 text-white m-10 px-4 py-3 font-bold rounded-md" onClick={()=>navigate("/user/tasks")}>SHOW ALL TASK</button>

      {/* Modal */}
      <CreateTaskModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSave} 
      />
    </div>
  );
};

export default UserDashboard;
