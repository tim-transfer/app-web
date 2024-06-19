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
      console.error(error);
    }
  };

  return (
    <ProjectListPage
      projects={projects}
      addProject={addProject}
      loadInformationsFiles={loadInformationsFiles}
    ></ProjectListPage>
  );
};

export default ProjectListContainer;
