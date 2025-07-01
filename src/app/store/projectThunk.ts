import { createAsyncThunk }  from '@reduxjs/toolkit';
import { Project } from '../type/project';

export const fetchProject = createAsyncThunk(
    'projects/fetchProjects',
    async ({page, limit} : { page: number, limit: number}, { rejectWithValue}) => {
        try {
            const res = await fetch(`https://684d25f865ed087139153942.mockapi.io/projects?page=${page}&limit=${limit}`)

            if (!res.ok) {
                throw new Error("Failed to fetch projects.");
            }
            const data = await res.json();
            return data;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue("Unknown error occurred.")
        }
    }
)

export const deleteProject = createAsyncThunk("projects/deleteProject", async (id: string, { rejectWithValue}) => {
    try {
        const res = await fetch(`https://684d25f865ed087139153942.mockapi.io/projects/${id}`, {
            method: "DELETE"
        });

        if(!res.ok) {
            throw new Error("Faied to delete projects.");
        }
        return id;
    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue("Unknown error occurred.");
    }
})

export const addProject = createAsyncThunk(
    "projects/addProject",
    async ( project: Omit<Project, "id">, { rejectWithValue} ) => {
        try {
            const res = await fetch("https://684d25f865ed087139153942.mockapi.io/projects", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(project),
            });
            if (!res.ok) {
                throw new Error("Failed to add project.");
            }
            const data = await res.json();
            return data;
        } catch (error) {
            if( error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue("Unknown error occurred.");
        }
    }
);

export const updateProject = createAsyncThunk(
    "projects/UpdateProjects",
    async ( project: Partial<Project> & {id: string}, { rejectWithValue }) => {
        try {
            const res = await fetch(`https://684d25f865ed087139153942.mockapi.io/projects/${project.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(project),
            });

            if(!res.ok) {
                throw new Error("Failed to update project.");
            }
            const data = await res.json();
            return data;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue("Unknown errora occurred.");
        }
    }
)