
import View from "./../../../component/View";

const UserAddPage = ({ listCompany, handleChange, handleSubmit, formData }) => {
  return (
    <View>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
        <h1 className="text-xl font-semibold">Création d'un utilisateur</h1>
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-50 dark:border-gray-50 flex flex-col mt-10">
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Adresse mail
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tempPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Mot de passe temporaire
            </label>
            <input
              type="password"
              id="tempPassword"
              name="tempPassword"
              value={formData.tempPassword}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="companyId"
              className="block text-sm font-medium text-gray-600"
            >
              Entreprise
            </label>
            <select
              id="companyId"
              name="companyId"
              value={formData.companyId}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
              required
            >
              <option value="">Sélectionnez une entreprise</option>
              {listCompany.map((company) => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-cyan-950 text-white p-2 rounded-md"
          >
            Créer utilisateur
          </button>
        </form>
      </div>
    </View>
  );
};

export default UserAddPage;