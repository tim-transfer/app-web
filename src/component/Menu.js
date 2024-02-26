import { HiOutlineHome } from "react-icons/hi2";
import { TbBuilding } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";

const Menu = () => {
return(
    <div className="flex-shrink-0 flex-col w-64 h-screen border-r-2 border-r-gray-200 ">
      {/* Logo */}
      <div className="flex items-center justify-center h-16">
        Logo
      </div>
      {/* Liens de navigation */}
      <div className="flex-1 overflow-y-auto">
        <nav className="mt-10">
        <a href="/dashboard" className="flex items-center py-3 px-4 text-black hover:bg-gray-50 hover:text-blue-600 font-sans font-medium">
              <HiOutlineHome size={25} className="mr-2" /> Tableau de bord
            </a>          
            <a href="#" className="flex items-center py-3 px-4 text-black hover:bg-gray-50 hover:text-blue-600 font-sans font-medium">
              <TbBuilding size={25} className="mr-2" /> Entreprises
            </a>          
            <a href="#" className="flex items-center py-3 px-4 text-black hover:bg-gray-50 hover:text-blue-600 font-sans font-medium">
              <FiUsers  size={25} className="mr-2" /> Utilisateurs
            </a>    
            {/* <a href="#" className="flex items-center py-2 px-4 text-black hover:bg-gray-50 hover:text-blue-600 font-sans font-medium">
              <FaHouse className="mr-2" /> Dashboard
            </a>   
            <a href="#" className="flex items-center py-2 px-4 text-black hover:bg-gray-50 hover:text-blue-600 font-sans font-medium">
              <FaHouse className="mr-2" /> Dashboard
            </a>    */}
        </nav>
      </div>
    </div>
);
}
export default Menu;