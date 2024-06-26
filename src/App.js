// my-react-app/src/App.js
import * as React from "react";
import "./index.css";
import axios from 'axios';

const App = () => {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/data');
      setData(response.data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

};

export default App;