import { CurrentWeather } from '../../../api/services/informationService';
import Informations from '../informations/Informations';
import Header from '../header/Header';
import { useState } from 'react';
import './Home.css';

function Home() {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);

  const handleWeatherUpdate = (updatedWeather: CurrentWeather) => {
    setWeather(updatedWeather);
  };

  return (
    <main className='background'>
      <Header onWeatherUpdate={handleWeatherUpdate} />
      <Informations weather={weather} />
    </main>
  );
}

export default Home;
