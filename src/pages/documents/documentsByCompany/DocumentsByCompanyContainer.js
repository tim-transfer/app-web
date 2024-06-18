import { useState, useEffect } from "react";
import DocumentsByCompanyPage from "./DocumentsByCompanyPage";
import apiRequest from "../../../services/apiRequest";
import { useParams } from "react-router-dom";
const DocumentsByCompanyContainer = () => {
  const { idParamInContainer } = useParams();

  const [company, setCompany] = useState({});

  const [fileInformations, setFilesInformations] = useState([]);

  useEffect(() => {
    loadDataFileInformations();
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
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loadDataFileInformations = async () => {
    try {
      const fileInformationsResult = await apiRequest({
        url: `fileInformations/byCompany/${idParamInContainer}`,
        method: "GET",
      });

      if (fileInformationsResult.status === 200) {
        setFilesInformations(fileInformationsResult.data.result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [formData, setFormData] = useState({
    nameFile: "",
    dateButoire: new Date(),
    extensionFile: "",
    position: "",
  });

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
      position: formData.position,
      companyId: idParamInContainer,
      dateButoire: formData.dateButoire,
      extensionFile: formData.extensionFile,
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
