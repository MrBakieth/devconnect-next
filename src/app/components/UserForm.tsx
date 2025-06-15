"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userThunk";
import type { AppDispatch } from "../store/store";

const UserForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    job: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.job) {
      alert("Please fill in all fields.");
      return;
    }
    dispatch(addUser(formData));
    setFormData({ name: "", email: "", job: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <input
        type="text"
        name="job"
        placeholder="Job"
        value={formData.job}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
