"use client";
import React, { useEffect, useState } from "react";
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
import Loading from "../loading";
import Failed from "../components/Failed";

export default function UsersPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { users, status, error } = useSelector(
    (state: RootState) => state.users
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", job: "" });

  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, limit }));
  }, [dispatch, currentPage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !job) return;

    await dispatch(addUser({ name, email, job }));
    setName("");
    setEmail("");
    setJob("");
    setShowForm(false);
  };

  const handleEditClick = (user: User) => {
    setEditUser(user);
    setFormData({ name: user.name, email: user.email, job: user.job });
  };

  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editUser) return;
    await dispatch(updateUser({ ...editUser, ...formData }));
    setEditUser(null);
  };

  const handleDeleteUser = (user: User) => {
    dispatch(deleteUser(user.id));
  };

  const hanldePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto w-full min-h-screen ">
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

      {status === "failed" && <Failed error={`Error: ${error}`} />}

      {status === "loading" ? (
        <Loading message="Loading..." />
      ) : (
        <>
          <UserList
            users={users}
            onEdit={handleEditClick}
            onDelete={handleDeleteUser}
          />
        </>
      )}
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
