import { useState, useEffect } from "react";
import apiRequest from "../../../../services/apiRequest";
import ProjectListPage from "./ProjectsListPage";
import { useParams } from "react-router-dom";

const ProjectListContainer = () => {
  const { idParamInContainer } = useParams();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const results = await apiRequest({
        url: `/company/projects/${idParamInContainer}`,
        method: "GET",
      });

      if (results.status === 200) {
        const projects = results.data;
        setProjects(projects);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addProject = () => {
    try {
      window.location.href = `/company/project/add/${idParamInContainer}`;
    } catch (error) {
      console.error(error);
    }
  };

  const loadInformationsFiles = (idProject) => {
    try {
      window.location.href = `/documents/${idParamInContainer}/${idProject}`;
    } catch (error) {
      console.error(
        "Erreur lors de l'appel de la fonction loadInformationsFiles dans la classe : ProjectListContainer " +
          error
      );
    }
  };

  const handleEditProject = (idProject) => {
    try {
      window.location.href = `/company/project/edit/${idProject}`;
    } catch (error) {
      console.error(
        "Erreur lors du chargement de la page pour éditer le projet : " +
          idProject
      );
    }
  };

  return (
    <ProjectListPage
      projects={projects}
      addProject={addProject}
      loadInformationsFiles={loadInformationsFiles}
      onEditProject={handleEditProject}
    ></ProjectListPage>
  );
};

export default ProjectListContainer;
