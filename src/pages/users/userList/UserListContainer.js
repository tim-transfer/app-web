import { useEffect, useState } from "react";
import apiRequest from "../../../services/apiRequest";
import UserListPage from "./UserListPage";

const UserListContainer = () => {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const handleUpdate = (userId) => {
    window.location.href = `/user/update/${userId}`;
  };

  const handleConfirmDelete = (userId, userEmail) => {
    if (
      window.confirm(
        `Êtes-vous sûr de vouloir supprimer l'utilisateur avec l'email ${userEmail}?`
      )
    ) {
      handleDeleteUser(userId);
    }
  };

  const handleDeleteUser = async (id, email) => {
    try {
      const result = await apiRequest({
        url: "user/" + id,
        method: "DELETE",
      });

      if (result.status === 200) {
        alert("L'utilisateur : " + email + " a bien été suprimé !");
        await loadData();
      }
    } catch (error) {
      console.error(
        "Erreur lors de la suppression de l'utilisateur ayant pour id : " +
          email
      );
      alert(
        "Erreur lors de la suppression de l'utilisateur, veuillez contactez l'administrateur."
      );
    }
  };

  const loadData = async () => {
    try {
      const result = await apiRequest({
        url: "users",
        method: "GET",
      });

      if (result.status === 200) {
        const users = result.data.result;
        const updatedUsers = await Promise.all(
          users.map(async (user) => {
            if (user.companyId != undefined) {
              const resultNameCompany = await apiRequest({
                url: "company/name/" + user.companyId,
                method: "GET",
              });
              if (resultNameCompany.status === 200) {
                user.companyName = resultNameCompany.data.result.name;
                return user;
              }
            } else {
              user.companyName = "Pas d'entreprise renseignée";
              return user;
            }
          })
        );
        setListUser(updatedUsers); // Filter out undefined values
      }
    } catch (error) {
      console.error("Error fetching in user method getAll", error);
    }
  };

  return (
    <UserListPage
      listUser={listUser}
      handleConfirmDelete={handleConfirmDelete}
      handleUpdate={handleUpdate}
    />
  );
};

export default UserListContainer;
