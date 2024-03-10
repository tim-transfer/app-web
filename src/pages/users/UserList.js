import InputText from "../../component/InputText";
import SidebarAddOrEdit from "../../component/SidebarAddOrEdit";
import View from "../../component/View";

const UserList = () => {
  let users = [
    {
      name: 'test',

    },

    {
      name: 'test',

    },
    {
      name: 'test',

    },
    {
      name: 'test',

    },
    {
      name: 'test',

    },
  ]
  return (
    <View>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
        <h1 className="text-xl font-semibold">Filtres</h1>
      </div>


      <div className="  p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
        <h1 className="text-xl font-semibold">Liste des utilisateurs</h1>
        <div className="flex justify-between items-center px-5">
          <div className="mb-5">
            <InputText
              placeholder={"Recherche"}
              type={"text"}
            />
          </div>
          <SidebarAddOrEdit />
        </div>

        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 pr-5">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-cyan-950">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Nom
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Titre
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                        Rôle
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a className="text-rose-400 hover:cursor-pointer font-medium" >{user.name}</a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                          {user.name}
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
  )
}

export default UserList;