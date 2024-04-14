import { useEffect, useState } from "react";
import apiRequest from "../../../services/apiRequest";
import CompanyListPage from "./CompanyListPage";
const CompanyListContainer = () => {
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

  const onUpdate = (companyId) => {
    window.location.href = `company/update/${companyId}`;
  };

  const onConfirmDelete = (companyId, nameCompany) => {
    if (
      window.confirm(
        `Êtes-vous sûr de vouloir supprimer l'entreprise ayant pour nom : ${nameCompany}?`
      )
    ) {
      handleDeleteCompany(companyId, nameCompany);
    }
  };

  const handleDeleteCompany = async (id, nameCompany) => {
    try {
      const result = await apiRequest({
        url: "company/" + id,
        method: "DELETE",
      });

      if (result.status === 200) {
        alert("L'utilisateur : " + nameCompany + " a bien été suprimé !");
        await loadData();
      }
    } catch (error) {
      console.error(
        "Erreur lors de la suppression de l'entreprise ayant pour id : " +
          nameCompany
      );

      alert(
        "Erreur lors de la suppression de l'entreprise, veuillez contactez l'administrateur."
      );
    }
  };

  return (
    <CompanyListPage
      listCompanies={listCompanies}
      handleConfirmDelete={onConfirmDelete}
      handleUpdate={onUpdate}
    ></CompanyListPage>
  );
};
export default CompanyListContainer;
