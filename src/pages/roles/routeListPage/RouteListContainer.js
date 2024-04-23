import { useState } from "react";
import apiRequest from "../../../services/apiRequest";

const RouteListContainer = () => {
  const [listRoles, setListRoles] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const result = await apiRequest({
        url: "roles",
        method: "GET",
      });

      if (result.status === 200) {
      }
    } catch (error) {
      console.error("Error fetching in roles getAll", error);
    }
  };


  const handleUpdate = () => {
    try {

    } catch (error){
      console.error("")
    }
  }
};

export default RouteListContainer;