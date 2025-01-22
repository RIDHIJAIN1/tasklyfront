import React, { useState, useEffect } from "react";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import { toast, ToastContainer } from "react-toastify";
import { editTask , createTask} from "../api/task";
import { useNavigate } from "react-router-dom";

const CreateTaskModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    status: "Pending",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        description: initialData.description,
        date: initialData.date.split("T")[0],
        status: initialData.status,
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const response = initialData
        ? await editTask(initialData._id, formData)
        : await createTask(formData);

      onSave(response);
      if (initialData) {
        // For editing, reload the page
        toast.success("Task edited successfully!");
        window.location.reload();
      } else {
        // For creating, navigate to /users/tasks
        toast.success("Task created successfully!");
        navigate("/user/tasks");
        window.location.reload();
      }

      onClose();
    } catch (error) {
      toast.error("Failed to save task: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {initialData ? "Edit Task" : "Add Task"}
        </h2>
        <form className="space-y-4">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Title
            </label>
            <div className="relative">
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter title"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
              <SubtitlesIcon className="absolute top-1/2 transform -translate-y-1/2 right-3" />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              rows="3"
            ></textarea>
          </div>

          {/* Due Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium">
              Due Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </form>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateTaskModal;
