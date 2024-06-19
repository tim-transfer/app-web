import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../../../../services/apiRequest";
import ProjectAddPage from "./ProjectAddPage";

const ProjectAddContainer = () => {
  const { idParamInContainer } = useParams();

  const [formData, setFormData] = useState({
    nameProject: "",
    companyId: -1,
    strartingDate: new Date(),
    endingDate: new Date()
  });

  const [company, setCompany] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Fetch company data
      const companyResult = await apiRequest({
        url: `company/${idParamInContainer}`,
        method: "GET",
      });

      if (companyResult.status === 200) {
        setCompany(companyResult.data.result);
        setFormData((prevData) => ({
          ...prevData,
          companyId: companyResult.data.result.id,
        }));
      }
    } catch (error) {
      console.error("Error loading company data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      const project = {
        nameProject: formData.nameProject,
        companyId: formData.companyId,
        startingDate: formData.startingDate,
        endingDate: formData.endingDate
      };

      const projectResult = await apiRequest({
        url: `/project`,
        method: "POST",
        data: project,
      });

      if (projectResult.status === 201) {
        window.location = `/company/projects/${idParamInContainer}`;
      }
    } catch (error) {
      console.error("Error submitting project:", error);
    }
  };

  return (
    <ProjectAddPage
      company={company}
      formData={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default ProjectAddContainer;
