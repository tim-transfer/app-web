import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../../../services/apiRequest";
import CompanyUpdatePage from "./CompanyUpdatePage";
const CompanyEditContainer = () => {
  useEffect(() => {
    loadData();
  }, []);
  const { idParamInContainer } = useParams();

  const [company, setCompany] = useState({
    name: "",
    address: "",
    idCompany: "",
    siret: "",
    direct: "",
  });

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
    } catch (error) {}
  };

  const onChange = (c) => {
    const { name, value } = c.target;
    setCompany({
      ...company,
      [name]: value,
    });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await apiRequest({
        url: `company/${idParamInContainer}`,
        method: "PATCH",
        data: company,
      });

      if (result.status === 200) {
        window.location.href = "/companies";
        console.log("Company updated successfully");
        // Optionally redirect or show success message
      } else {
        console.error("Error updating company:", result.error);
        // Optionally show error message
      }
    } catch (error) {
      console.error("Error updating company:", error);
      // Optionally show error message
    }
  };

  return (
    <CompanyUpdatePage
      handleChange={onChange}
      handleSubmit={onSubmit}
      formData={company}
    ></CompanyUpdatePage>
  );
};
export default CompanyEditContainer;
