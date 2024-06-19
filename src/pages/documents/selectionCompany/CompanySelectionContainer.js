import CompanySelectionPage from "./CompanySelectionPage";
import React, { useState, useEffect } from "react";
import apiRequest from "../../../services/apiRequest";

const DocumentsSelectionByCompanyContainer = () => {
  const [listCompanies, setListCompanies] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const result = await apiRequest({
        url: "companies",
        method: "GET",
      });

      if (result.status === 200) {
        setListCompanies(result.data.result);
      }
    } catch (error) {
      console.error("Error fetching in companies method getAll", error);
    }
  };

  const selectCompany = (companyId) => {
    window.location.href = `/company/projects/${companyId}`;
  };

  return (
    <CompanySelectionPage
      listCompanies={listCompanies}
      selectCompany={selectCompany}
    ></CompanySelectionPage>
  );
};
export default DocumentsSelectionByCompanyContainer;
