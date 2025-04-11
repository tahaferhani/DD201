import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [temp, setTemp] = useState();
  const [loaderVisible, setLoaderVisible] = useState(false)

  const getWeatherData = async () => {
    setLoaderVisible(true)
    const url = "https://api.open-meteo.com/v1/forecast?latitude=48.856613&longitude=2.352222&current=temperature_2m,is_day,rain&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=auto";
    const resp = await axios.get(url);
    setTemp(resp.data.current.temperature_2m);
    setLoaderVisible(false)
  }

  useEffect(() => {
    getWeatherData();
  }, [])

  return (
    <div className="App">
      <h2>Current temperature is {temp}°</h2>

      {
        loaderVisible &&
        <div id="loader">
          <span></span>
        </div>
      }
    </div>
  );
}

export default App;
