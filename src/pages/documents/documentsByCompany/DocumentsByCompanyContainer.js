import { useState, useEffect } from "react";
import DocumentsByCompanyPage from "./DocumentsByCompanyPage";
import apiRequest from "../../../services/apiRequest";
import { useParams } from "react-router-dom";
const DocumentsByCompanyContainer = () => {
  const { idCompanyParamInContainer } = useParams();
  const { idProjectInContainer } = useParams();

  const [company, setCompany] = useState({});

  const [fileInformations, setFilesInformations] = useState([]);

  const [formData, setFormData] = useState({
    nameFile: "",
    dateButoire: new Date(),
    position: "",
  });

  useEffect(() => {
    loadDataFileInformations();
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Fetch company data
      const companyResult = await apiRequest({
        url: `company/${idCompanyParamInContainer}`,
        method: "GET",
      });

      if (companyResult.status === 200) {
        setCompany(companyResult.data.result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadDataFileInformations = async () => {
    try {
      const fileInformationsResult = await apiRequest({
        url: `fileInformations/byProject/${idProjectInContainer}`,
        method: "GET",
      });

      if (fileInformationsResult.status === 200) {
        setFilesInformations(fileInformationsResult.data.result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      dateButoire: date,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fileInformationToSend = {
      nameFile: formData.nameFile,
      isActive: true,
      companyId: idCompanyParamInContainer,
      projectId: idProjectInContainer,
      dateButoire: formData.dateButoire,
    };

    try {
      const result = await apiRequest({
        url: "/fileInformation",
        method: "POST",
        data: fileInformationToSend,
      });

      if (result.status === 201) {
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DocumentsByCompanyPage
      formData={formData}
      company={company}
      fileInformations={fileInformations}
      onChange={handleChange}
      onDateChange={handleDateChange}
      onSubmit={handleSubmit}
    />
  );
};

export default DocumentsByCompanyContainer;
