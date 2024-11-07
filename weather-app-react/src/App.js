import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [temp, setTemp] = useState("");

  const getWeatherData = async (latitude, longitude) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,rain,cloud_cover,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=auto`;
    let resp = await axios.get(url);
    let data = resp.data;
    setTemp(data.current.temperature_2m);
  }

  const onSelectChange = (e) => {
    const coords = e.target.value.split(",");
    getWeatherData(coords[0], coords[1]);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      getWeatherData(coords.latitude, coords.longitude);
    })
  }, [])
  
  return (
    <div className="App">
      <select onChange={onSelectChange}>
        <option></option>
        <option value="48.856613,2.352222">Paris</option>
        <option value="31.230391,121.473701">Shanghai</option>
        <option value="40.741895,-73.989308">New York</option>
        <option value="30.4205162,-9.5838532">Agadir</option>
      </select>

      <h1>The temperature is : {temp}°</h1>
    </div>
  );
}

export default App;
