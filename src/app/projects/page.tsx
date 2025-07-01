"use client"; // This line indicates that this component should be rendered on the client side in Next.js.
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// we import our thunk actions
import {
  fetchProject,
  addProject,
  updateProject,
  deleteProject,
} from "../store/projectThunk";

// type definitions
import type { AppDispatch, RootState } from "../store/store";
import { Project } from "../type/project";

// Components
import ProjectList from "../components/ProjectList";
import ProjectForm from "../components/ProjectForm";
import EditForm from "../components/EditProject";
import Pagination from "../components/Pagination";
import Loading from "../loading";
import Failed from "../components/Failed";

export default function ProjectsPage() {
  // Accessing the redux store using useDispatch and useSelector hooks
  const dispatch = useDispatch<AppDispatch>();

  // Getting project data and status from the redux store
  const { projects, status, error } = useSelector(
    (state: RootState) => state.projects
  );

  // Form - data states
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [showForm, setShowForm] = useState(false); // to toggle the project form visibility
  const [editProject, setEditProject] = useState<Project | null>(null); // Project to be edited
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
  }); // Temporaray state for edit form

  // For pagination current page tracking
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5; // Limit of projects per page

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description || !date) return;

    await dispatch(addProject({ name, description, date }));

    // Reset the form
    setName("");
    setDescription("");
    setDate("");
    setShowForm(false);
  };

  useEffect(() => {
    dispatch(fetchProject({ page: currentPage, limit: 5 }));
  }, [dispatch, currentPage, limit]);

  // For editing a project
  const handleEditClick = (project: Project) => {
    setEditProject(project);
    setFormData({
      name: project.name,
      description: project.description,
      date: project.date,
    });
  };

  // For deleting a project
  const handleDeleteProject = async (project: Project) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      await dispatch(deleteProject(project.id));
    }
  };

  // Update edited project
  const handleUpdateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editProject) return;

    await dispatch(updateProject({ ...editProject, ...formData }));
    setEditProject(null);
  };

  // Page changing
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto w-full min-h-screen">
      {/* Header and project add button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 ">
        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
          Project List
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition w-full sm:w-auto text-center"
        >
          {showForm ? "Cancel" : "Add Project"}
        </button>
      </div>
      {/* Project adding form  */}
      {showForm && (
        <div className="mb-6">
          <ProjectForm
            name={name}
            description={description}
            date={date}
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
            onChange={(field, value) => {
              if (field === "name") setName(value);
              if (field === "description") setDescription(value);
              if (field === "date") setDate(value);
            }}
          />
        </div>
      )}

      {/* Project editing form  */}
      {editProject && (
        <div className="mb-6">
          <EditForm
            title="Edit Project"
            name={formData.name}
            description={formData.description}
            date={formData.date}
            onSubmit={handleUpdateSubmit}
            onCancel={() => setEditProject(null)}
            onChange={(field, value) =>
              setFormData((prev) => ({ ...prev, [field]: value }))
            }
          />
        </div>
      )}

      {/* If error occurred */}
      {status === "failed" && <Failed error={`Error: ${error}`} />}

      {/* Showing loading animation while loading project list  */}
      {status === "loading" ? (
        <Loading message="Loading..." />
      ) : (
        <ProjectList
          projects={projects}
          onEdit={handleEditClick}
          onDelete={handleDeleteProject}
        />
      )}

      {/* Show pagination if there is a user */}
      {projects.length === 0 && status !== "loading" ? null : (
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            disablePrev={currentPage === 1}
          />
        </div>
      )}
    </div>
  );
}
