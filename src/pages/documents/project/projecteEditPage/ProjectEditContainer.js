import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../../../../services/apiRequest";
import ProjectEditPage from "./ProjectEditPage";

const ProjectEditContainer = () => {
  const { idParamInContainer } = useParams();

  const [project, setProject] = useState(null);

  const [formData, setFormData] = useState({
    nameProject: "",
    startingDate: "",
    endingDate: "",
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const projectResult = await apiRequest({
          url: `/project/${idParamInContainer}`,
          method: "GET",
        });

        if (projectResult.status === 200) {
          setProject(projectResult.data.result);
          setFormData({
            nameProject: projectResult.data.result.nameProject,
            startingDate: new Date(projectResult.data.result.startingDate),
            endingDate: new Date(projectResult.data.result.endingDate),
          });
          console.log(project.id);
        }
      } catch (error) {
        console.error("Error loading data", error);
      }
    };

    loadData();
  }, [idParamInContainer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedProject = {
        nameProject: formData.nameProject,
        companyId: project.companyId,
        startingDate: formData.startingDate,
        endingDate: formData.endingDate,
      };

      const projectResult = await apiRequest({
        url: `/project/${project.id}`,
        method: "PATCH",
        data: updatedProject,
      });

      if (projectResult.status === 200) {
        window.location = `/company/projects/${project.companyId}`;
      }
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <ProjectEditPage
      projectData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default ProjectEditContainer;
