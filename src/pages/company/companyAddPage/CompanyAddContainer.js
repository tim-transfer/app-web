import CompanyAddPage from "./CompanyAddPage";
import apiRequest from "../../../services/apiRequest";
import Toast from "../../../component/Toast";
import { useState } from "react";

const CompanyAddContainer = () => {
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
      setToast({ type, message });
  };

  const handleCloseToast = () => {
      setToast(null);
  };

  const onSubmit = async (event) => {
    try {
      event.preventDefault();

      let companyToSend = new Object();

      companyToSend.name = event.target[0].value;
      companyToSend.address = event.target[2].value;
      companyToSend.siret = event.target[4].value;
      companyToSend.direct = event.target[6].value;

      companyToSend.idUser = localStorage.getItem("idUser") ?? null;

      const result = await apiRequest({
        url: "/company",
        method: "POST",
        data: companyToSend,
      });

      if (result.status == 200) {
        showToast("success", "l'entreprise a bien été créer !");
        window.location.reload();
      }
    } catch (error) {
      showToast("error", error.message);
    }
  };

  return (
    <>
    <CompanyAddPage handleSubmit={onSubmit}></CompanyAddPage>
    {toast && <Toast type={toast.type} message={toast.message} onClose={handleCloseToast} />}
    </>
);
};

export default CompanyAddContainer;
