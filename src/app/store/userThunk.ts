import { createAsyncThunk} from "@reduxjs/toolkit";
import { User } from "../type/user";

export const fetchUsers = createAsyncThunk("users/fetchUsers",
    async({page, limit } : { page: number, limit: number}, {rejectWithValue}) => {
        try {
            const res = await fetch(`https://684d25f865ed087139153942.mockapi.io/users?page=${page}&limit=${limit}`);
        
            if(!res.ok) {
                throw new Error("Failed to fetch users.");
            }
            const data = await res.json();
            return data;
        } catch (error) {
            if(error instanceof Error) {
                return rejectWithValue(error.message)
            }
            return rejectWithValue("Unknown error occured.")
        }
    }
)

export const deleteUser = createAsyncThunk("users/deleteUser", async (id:string, {rejectWithValue}) => {
    try {
    const res = await fetch (`https://684d25f865ed087139153942.mockapi.io/users/${id}`, {
        method: "DELETE"
    });
    if(!res.ok) {
        throw new Error("Failed to delete user.");
    }
    return id; 
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message)
        }
        return rejectWithValue("Unknown error occured.")
    }
})

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
