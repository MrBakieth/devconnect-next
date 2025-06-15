"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser, updateUser } from "@/app/store/userThunk";
import type { AppDispatch, RootState } from "../store/store";
import { User } from "../type/user";

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

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
          <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
              <h1 className="text-xl flex justify-center items-center font-medium">
                Add An User
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 mb-6 p-4 rounded"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Job"
                  className="w-full p-2 border rounded"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  required
                />
                <div className="space-x-4">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-2 py-2 rounded hover:bg-green-700 transition"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-red-600 text-white px-2 py-2 rounded hover:bg-red-700 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {editUser && (
          <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
              <h1 className="text-xl flex justify-center items-center font-medium">
                Edit User
              </h1>
              <form
                onSubmit={handleUpdateSubmit}
                className="space-y-4 mb-6 p-4 rounded"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Job"
                  className="w-full p-2 border rounded"
                  value={formData.job}
                  onChange={(e) =>
                    setFormData({ ...formData, job: e.target.value })
                  }
                />
                <div className="space-x-4">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-2 py-2 rounded hover:bg-green-700 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => setEditUser(null)}
                    className="bg-red-600 text-white px-2 py-2 rounded hover:bg-red-700 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {status === "loading" && <p>Loading Users...</p>}
        {status === "failed" && <p className="text-red-500">Error: {error}</p>}
      </div>
      <ul className="flex justify-center items-center">
        {users.map((user) => (
          <li
            key={user.id}
            className="border-b border-gray-300 shadow-lg p-3 rounded bg-white w-6xl"
          >
            <p className="font-semibold text-xl">{user.name}</p>
            <p className="text-lg text-gray-600">
              {user.email} - {user.job}
            </p>
            <button
              className="mt-2 text-indigo-600 underline text-lg"
              onClick={() => handleEditClick(user)}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
