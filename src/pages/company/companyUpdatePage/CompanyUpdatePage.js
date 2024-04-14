import View from "./../../../component/View";

const UserUpdatePage = ({ handleChange, handleSubmit, formData }) => {
  return (
    <View>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
        <h1 className="text-xl font-semibold">Ajoutez une entreprise</h1>
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
        <h1 className="text-xl font-semibold">Créer une nouvelle entreprise</h1>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Nom de l'entreprise
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Adresse de l'entreprise
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="siret"
              className="block text-sm font-medium text-gray-600"
            >
              Numéro de siret de l'entreprise
            </label>
            <input
              type="text"
              id="siret"
              name="siret"
              value={formData.siret}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="direct"
              className="block text-sm font-medium text-gray-600"
            >
              Nom du dirigent de l'entreprise
            </label>
            <input
              type="text"
              id="direct"
              name="direct"
              value={formData.direct}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-cyan-950 text-white p-2 rounded-md"
          >
            Mettre à jour l'entreprise
          </button>
        </form>
      </div>
    </View>
  );
};

export default UserUpdatePage;
