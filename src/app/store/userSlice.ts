import { createSlice } from '@reduxjs/toolkit';
import { User } from '../type/user'
import { fetchUsers, addUser, updateUser, deleteUser} from './userThunk';

export interface UserState {
    users: User[],
    status: "idle" | "loading" | "succeeded" | "failed",
    error: null | string ; 

}

const initialState: UserState = {
    users: [],
    status: "idle",
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.status = "succeeded";
        })
        .addCase(addUser.fulfilled, (state, action) => {
            state.users.push(action.payload);
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            const index = state.users.findIndex((u) => u.id == updatedUser.id);
            if (index !== -1 ) {
                state.users[index] = updatedUser;
            }
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        })
        .addMatcher(
           (action): action is { type: string } =>
            action.type.endsWith("/pending"),
           (state) => {
            state.status = "loading";
           }
        )
        .addMatcher(
            (action) : action is { type: string } =>
                action.type.endsWith("/fulfilled"),
            (state) => {
                state.status = "succeeded";
            }
        )
        .addMatcher(
            (action): action is { type: string; error: { message?: string}} =>
                action.type.endsWith("/rejected"),
            (state,action) => {
                state.status = "failed";
                state.error = action.error.message || "An error occurred."
            }
        )
        
    }
})

export default userSlice.reducer;