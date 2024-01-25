// my-react-app/src/App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
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

  return (
    <div>
      <h1>{data ? data.message: 'Loading...'}</h1>
    </div>
  );
};

export default App;