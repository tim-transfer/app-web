// my-react-app/src/App.js
import Login from './auth/Login';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import routes from "./routes/index"
import Menu from './component/Menu';

const App = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8000/api/data');
  //     setData(response.data);
  //     console.log(data)
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

};

export default App;