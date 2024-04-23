const CompanyListPage = (handleUpdate) => {
  return (
    <View>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
        <h1 className="text-xl font-semibold">Filtre</h1>
        <InputText
          placeholder={"Recherche"}
          type={"text"}
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
        <div className="flex justify-between items-center px-5 mt-4 mb-5">
          <h1 className="text-xl font-semibold">Liste des entreprises</h1>
          <a href="company/companyAddPage" className="flex items-center">
            <Button
              type="button"
              label="Ajouter"
              style="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            />
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
                        Libelle
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Affiche
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
                    {currentCompanies.map((company) => (
                      <tr key={company.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {company.libelle}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {company.posterLibelle}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button
                            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleUpdate(company.id)}
                          >
                            Modifier
                          </button>
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() =>
                              handleConfirmDelete(company.id, company.name)
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
        <div class="flex justify-between mt-5">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onclick={prevPage}
            disabled={currentPage === 1}
          >
            Page précédente
          </button>
          <span class="text-gray-700">
            Page {currentPage} sur {totalPages}
          </span>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onclick={nextPage}
            disabled={currentPage === totalPages}
          >
            Page suivante
          </button>
        </div>
      </div>
    </View>
  );
};

export default CompanyListPage;
