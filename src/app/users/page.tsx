"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser,
} from "@/app/store/userThunk";
import type { AppDispatch, RootState } from "../store/store";
import { User } from "../type/user";
import UserList from "@/app/components/UserList";
import UserForm from "../components/UserForm";
import EditUser from "../components/EditUser";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import Failed from "../components/Failed";

export default function UsersPage() {
  // Hooks for using React Redux Toolkit
  const dispatch = useDispatch<AppDispatch>();
  const { users, status, error } = useSelector(
    (state: RootState) => state.users
  );

  // States of User List
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [showForm, setShowForm] = useState(false);

  // States of edit user informations
  const [editUser, setEditUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", job: "" });

  // State of pagination
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;

  // We're fetching our users from API which is MockAPI
  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, limit }));
  }, [dispatch, currentPage]);

  // Function that submitting our form data
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !job) return;

    await dispatch(addUser({ name, email, job }));
    setName("");
    setEmail("");
    setJob("");
    setShowForm(false);
  };

  // Function that for edit button
  const handleEditClick = (user: User) => {
    setEditUser(user);
    setFormData({ name: user.name, email: user.email, job: user.job });
  };

  // Function that for editing our user update button
  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editUser) return;
    await dispatch(updateUser({ ...editUser, ...formData }));
    setEditUser(null);
  };
  // Function that user delete button
  const handleDeleteUser = (user: User) => {
    dispatch(deleteUser(user.id));
  };

  // function that handling page number
  const hanldePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold"> User List </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          {showForm ? "Cancel" : "Add User"}
        </button>

        {showForm && (
          <UserForm
            name={name}
            email={email}
            job={job}
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
            onChange={(field, value) => {
              if (field == "name") setName(value);
              else if (field === "email") setEmail(value);
              else if (field === "job") setJob(value);
            }}
          />
        )}
        {editUser && (
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
        )}
        {status === "loading" && <Loading message="Loading..." />}
        {status === "failed" && <Failed error={`Error: ${error}`} />}
      </div>
      <UserList
        users={users}
        onEdit={handleEditClick}
        onDelete={handleDeleteUser}
      />
      <Pagination
        currentPage={currentPage}
        onPageChange={hanldePageChange}
        disablePrev={currentPage === 1}
      />
    </div>
  );
}
