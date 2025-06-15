import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../type/user";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const res = await fetch("https://684d25f865ed087139153942.mockapi.io/users");
    if (!res.ok) {
        throw new Error("Data could not be retrieved.");
    }
    return await res.json();
});

export const addUser = createAsyncThunk(
    "users/addUser",
    async (user: Omit<User, "id">, { rejectWithValue }) => {
        try {
            const res = await fetch(
                "https://684d25f865ed087139153942.mockapi.io/users",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(user),
                }
            );
            if (!res.ok) {
                throw new Error("Failed to add user.");
            }
            const data = await res.json();
            return data;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue("Unknown error occured.");
        }
    }
);

export const updateUser = createAsyncThunk(
    "users/updateUser",
    async (user: Partial<User> & { id: string }, { rejectWithValue }) => {
        try {
            const res = await fetch(
                `https://684d25f865ed087139153942.mockapi.io/users/${user.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                }
            );

            if (!res.ok) {
                throw new Error("Failed to update user.");
            }

            const data = await res.json();
            return data;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
        }
        return rejectWithValue("Unknown error occured.");
    }
);
