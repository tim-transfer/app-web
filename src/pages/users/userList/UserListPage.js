import React from "react";
import View from "./../../../component/View";
import InputText from "./../../../component/InputText";
import SidebarAddOrEdit from "./../../../component/SidebarAddOrEdit";
import LinkButton from "../../../component/LinkButton";

const UserListPage = ({ listUser, handleConfirmDelete }) => {
  return (
    <View>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
        <h1 className="text-xl font-semibold">Filtres</h1>
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
        <h1 className="text-xl font-semibold">Liste des utilisateurs</h1>
        <div className="flex justify-between items-center px-5">
          <div className="mb-5">
            <InputText placeholder={"Recherche"} type={"text"} />
          </div>
          <a href="/user/add">
            <button>Créer</button>
          </a>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 pr-5">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-cyan-950">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Nom
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Prénom
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <td
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Entreprise
                      </td>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Rôle
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {listUser.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.lastName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.firstName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.companyName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.isAdmin ? "Admin" : "Utilisateur"}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Modifier
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() =>
                              handleConfirmDelete(user.id, user.email)
                            }
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </View>
  );
};

export default UserListPage;
