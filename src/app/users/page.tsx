"use client"; // Enables client-side rendering in Next.js for this component.

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import thunk functions for asynchronous user actions
import {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser,
} from "@/app/store/userThunk";

// Type definitions
import type { AppDispatch, RootState } from "../store/store";
import { User } from "../type/user";

// Import UI components
import UserList from "@/app/components/UserList";
import UserForm from "../components/UserForm";
import EditUser from "../components/EditUser";
import Pagination from "../components/Pagination";
import Loading from "../loading";
import Failed from "../components/Failed";

export default function UsersPage() {
  // Hooks to interact with Redux store
  const dispatch = useDispatch<AppDispatch>();

  // Retrieve user data and status from Redux store
  const { users, status, error } = useSelector(
    (state: RootState) => state.users
  );

  // State variables for form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");

  const [showForm, setShowForm] = useState(false); // Toggle user form visibility
  const [editUser, setEditUser] = useState<User | null>(null); // User to be edited
  const [formData, setFormData] = useState({ name: "", email: "", job: "" }); // Temporary state for edit form

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5; // Number of users per page

  // Fetch users when the component mounts or the page changes
  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, limit }));
  }, [dispatch, currentPage]);

  // Handle form submission for adding a new user
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !job) return;

    await dispatch(addUser({ name, email, job }));

    // Reset form fields
    setName("");
    setEmail("");
    setJob("");
    setShowForm(false);
  };

  // When edit button is clicked, populate the form with selected user data
  const handleEditClick = (user: User) => {
    setEditUser(user);
    setFormData({ name: user.name, email: user.email, job: user.job });
  };

  // Handle form submission for updating a user
  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editUser) return;
    await dispatch(updateUser({ ...editUser, ...formData }));
    setEditUser(null);
  };

  // Handle user deletion
  const handleDeleteUser = async (user: User) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(user.id));
    }
  };

  // Handle pagination page change
  const hanldePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto w-full min-h-screen ">
      {/* Header and Add User button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          User List
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition w-full sm:w-auto text-center"
        >
          {showForm ? "Cancel" : "Add User"}
        </button>
      </div>

      {/* User creation form (toggleable) */}
      {showForm && (
        <div className="mb-6">
          <UserForm
            name={name}
            email={email}
            job={job}
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
            onChange={(field, value) => {
              if (field === "name") setName(value);
              else if (field === "email") setEmail(value);
              else if (field === "job") setJob(value);
            }}
          />
        </div>
      )}

      {/* User editing form (shown when a user is selected for editing) */}
      {editUser && (
        <div className="mb-6">
          <EditUser
            title="Edit User"
            name={formData.name}
            email={formData.email}
            job={formData.job}
            onSubmit={handleUpdateSubmit}
            onCancel={() => setEditUser(null)}
            onChange={(field, value) =>
              setFormData((prev) => ({ ...prev, [field]: value }))
            }
          />
        </div>
      )}

      {/* Display error message if data fetching failed */}
      {status === "failed" && <Failed error={`Error: ${error}`} />}

      {/* Show loading spinner while fetching data, otherwise show user list */}
      {status === "loading" ? (
        <Loading message="Loading..." />
      ) : (
        <UserList
          users={users}
          onEdit={handleEditClick}
          onDelete={handleDeleteUser}
        />
      )}

      {/* Display pagination if users are available */}
      {users.length === 0 && status !== "loading" ? null : (
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            onPageChange={hanldePageChange}
            disablePrev={currentPage === 1}
          />
        </div>
      )}
    </div>
  );
}
