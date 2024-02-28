import { HiOutlineHome, HiOutlineUser, HiOutlineOfficeBuilding } from 'react-icons/hi'; // Import des icônes React

const Menu = () => {
  let menus = [
    {
      name: 'Tableau de bord',
      route: '/dashboard',
      icon: HiOutlineHome // Icône pour le tableau de bord
    },
    {
      name: 'Utilisateurs',
      route: '/users',
      icon: HiOutlineUser // Icône pour les utilisateurs
    },
    {
      name: 'Entreprises',
      route: '/companies',
      icon: HiOutlineOfficeBuilding // Icône pour les entreprises
    },
  ];

  return (
    <div className="flex-shrink-0 flex-col w-64 h-screen border-r-2 border-r-gray-200 bg-cyan-950">
      {/* Logo */}
      <div className="flex items-center justify-center h-16">
        Logo
      </div>

      {/* Liens de navigation */}
      <div className="flex-1 overflow-y-auto">
        <nav className="mt-10 pl-2 pr-2">
          {menus.map((menu, index) => (
            <a key={index} href={menu.route} className="flex items-center py-3 px-4 text-white hover:-translate-y-1 hover:transition-all hover:text-rose-400 font-medium">
              <menu.icon size={25} className="mr-2" /> {menu.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="absolute bottom-0 text-white text-center mb-5 ml-5">
        <div className="flex justify-between -space-x-1 overflow-hidden">
          <div className="flex items-center gap-4">
            <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Image d'une personne" />
            <div className="font-medium dark:text-white">
              <div>Jese Leos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;