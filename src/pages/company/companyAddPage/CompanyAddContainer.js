import CompanyAddPage from "./CompanyAddPage";
import apiRequest from "../../../services/apiRequest";

const CompanyAddContainer = () => {
  const onSubmit = async (event) => {
    try {
      event.preventDefault();

      let companyToSend = new Object();

      companyToSend.name = event.target[0].value;
      companyToSend.address = event.target[1].value;
      companyToSend.idUser = localStorage.getItem("idUser") ?? null;

      const result = await apiRequest({
        url: "/company",
        method: "POST",
        data: companyToSend,
      });

      if (result.status == 201) {
        window.location.reload();
      }
    } catch (error) {
      alert("Une entreprise avec le même nom existe déjà");
    }
  };

  return <CompanyAddPage handleSubmit={onSubmit}></CompanyAddPage>;
};

export default CompanyAddContainer;
