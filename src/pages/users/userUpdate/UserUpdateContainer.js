import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../../../services/apiRequest";
import UserUpdatePage from "./UserUpdatePage";

const UserUpdateContainer = () => {
  const { idParamInContainer } = useParams();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyId: "",
    isAdmin: false,
  });

  const [listRoles, setListRoles] = useState([
    { value: true, text: "Administrateur" },
    { value: false, text: "Utilisateur" },
  ]);

  const [listCompany, setListCompany] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Fetch user data
      const userResult = await apiRequest({
        url: `user/${idParamInContainer}`,
        method: "GET",
      });

      if (userResult.status === 200) {
        setUser(userResult.data.result);
      }

      // Fetch company list
      const companyResult = await apiRequest({
        url: "company",
        method: "GET",
      });

      if (companyResult.status === 200) {
        setListCompany(companyResult.data.result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await apiRequest({
        url: `user/${idParamInContainer}`,
        method: "PUT",
        data: user,
      });

      if (result.status === 200) {
        window.location.href = "/users";
        console.log("User updated successfully");
        // Optionally redirect or show success message
      } else {
        console.error("Error updating user:", result.error);
        // Optionally show error message
      }
    } catch (error) {
      console.error("Error updating user:", error);
      // Optionally show error message
    }
  };

  return (
    <UserUpdatePage
      listCompany={listCompany}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={user}
      listRoles={listRoles}
    />
  );
};

export default UserUpdateContainer;
