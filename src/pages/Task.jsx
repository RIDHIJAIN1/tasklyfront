import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { toast, ToastContainer } from "react-toastify";
import { deleteTask, getTask, getTaskByUserId } from "../api/task";
import CreateTaskModal from "../components/CreateTaskModal";
import DeleteTaskModel from "../components/DeleteTaskModel";
import { useAuth } from "../utils/AuthContext";
// import CreateTaskModal from "./CreateTaskModal";

const Task = () => {
  const { login } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
const [dateFilter, setDateFilter] = useState("");


  // Fetch tasks on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const user = localStorage.getItem("role");
        console.log(user);
        const taskData =
          user === "admin" ? await getTask() : await getTaskByUserId();
        setTasks(taskData); // Set fetched tasks
      } catch (error) {
        "Failed to fetch tasks: " + error;
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((task) => task._id !== id));
      toast.success("Task deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete task: " + error);
    }
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setEditModalOpen(true);
  };

  const openDeleteModal = (task) => {
    setSelectedTask(task);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    handleDelete(selectedTask._id);
    setDeleteModalOpen(false);
  };
  const filteredTasks = tasks
  .filter((task) => {
    // Filter by status
    if (statusFilter && task.status !== statusFilter) {
      return false;
    }
    return true;
  })
  .sort((a, b) => {
    // Sort by date if date filter is selected
    if (dateFilter === "latest") {
      return new Date(b.date) - new Date(a.date);
    } else if (dateFilter === "oldest") {
      return new Date(a.date) - new Date(b.date);
    }
    return 0; // No sorting by default
  });

return (
  <div className="my-10 px-4 md:px-10 lg:px-20">
    <ToastContainer />
    <h1 className="text-2xl md:text-3xl font-bold text-blue-950 text-center mb-6">
      Your Tasks
    </h1>
    
    {/* Filter Controls */}
    <div className="flex justify-between items-center mb-6">
      <div className="flex space-x-4">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">Filter by Status</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
          <option value="Pending">Pending</option>
        </select>

        <select
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="">Filter by Date</option>
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>

    {/* Loading/No Tasks State */}
    {loading ? (
      <p className="text-center text-gray-500">Loading tasks...</p>
    ) : filteredTasks.length === 0 ? (
      <p className="text-center text-gray-500">No tasks available.</p>
    ) : (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="p-4 bg-white rounded-lg shadow-lg border-l-4 border-blue-950 transition-transform hover:scale-105"
          >
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-blue-950 truncate">
                {task.title}
              </h3>
              <p className="text-sm text-gray-500">
                {new Date(task.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
            <p className="text-gray-700 mb-4 line-clamp-3">
              {task.description}
            </p>
            <div className="flex justify-between items-center">
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  task.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : task.status === "In Progress"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {task.status}
              </span>
              <div className="flex space-x-2">
                <button
                  className="flex items-center justify-center w-8 h-8 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
                  onClick={() => handleEdit(task)}
                >
                  <EditIcon fontSize="small" />
                </button>
                <button
                  className="flex items-center justify-center w-8 h-8 bg-red-700 text-white rounded-full hover:bg-red-800 transition"
                  onClick={() => openDeleteModal(task)}
                >
                  <DeleteForeverIcon fontSize="small" />
                </button>
              </div>
            </div>
          </div>
        ))}
        <div
          className="p-4 bg-white rounded-lg shadow-lg border-l-4 border-blue-950 transition-transform hover:scale-105 justify-center text-center flex items-center"
        >
          <div
            className="flex items-center justify-center w-12 h-12 bg-blue-950 text-white cursor-pointer text-xl font-bold rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            onClick={() => handleEdit()}
          >
            +
          </div>
        </div>
      </div>
    )}
    
    {/* Modals */}
    {editModalOpen && (
      <CreateTaskModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={(updatedTask) => {
          setTasks((prev) =>
            prev.map((task) =>
              task.id === updatedTask.id ? updatedTask : task
            )
          );
          setEditModalOpen(false);
        }}
        initialData={selectedTask}
      />
    )}
    <DeleteTaskModel
      isOpen={deleteModalOpen}
      onClose={() => setDeleteModalOpen(false)}
      onConfirm={confirmDelete}
    />
  </div>
);

};

export default Task;
