import {createSlice} from '@reduxjs/toolkit';
import {Project} from '../type/project';
import {fetchProject, addProject, updateProject, deleteProject} from './projectThunk';

export interface ProjectState {
    projects: Project[];
    status: "idle" | "loading" | "succeeded" |"failed";
    error: null | string;
}

const initialState: ProjectState ={
    projects: [],
    status: "idle",
    error: null
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProject.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.projects = action.payload;
        })
        .addCase(addProject.fulfilled, (state, action) => {
            state.projects.push(action.payload);
        })
        .addCase(deleteProject.fulfilled, (state, action) => {
            state.projects = state.projects.filter((project) => project.id !== action.payload);
        })
        .addCase(updateProject.fulfilled, (state, action) => {
            const updatedProject = action.payload;
            const index = state.projects.findIndex((p) => p.id === updatedProject.id);
            if (index !== -1) {
                state.projects[index] = updatedProject;
            }
        })
    }
})

export default projectSlice.reducer;