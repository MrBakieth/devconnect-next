"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/userThunk"; // doğru dosya ismini yaz
import type { RootState, AppDispatch } from "../store/store";
import { User } from "../type/user";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, status, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p className="text-red-500">{error}</p>}
      {status === "succeeded" && (
        <ul className="space-y-2">
          {users.map((user: User) => (
            <li key={user.id} className="border p-2 rounded">
              <p>
                <strong>{user.name}</strong>
              </p>
              <p>{user.email}</p>
              <p>{user.job}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
