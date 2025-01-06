import React from 'react';
import { CurrentWeather } from '../../../api/services/informationService';
import SummaryContainer from '../../weather/summary/SummaryContainer';
import DetailsContainer from '../../weather/details/DetailsContainer';
import './Informations.css';

interface InformationsProps {
  weather: CurrentWeather | null;
}

const Informations: React.FC<InformationsProps> = ({ weather }) => {
  return (
    <section className='information__container'>
      <header className='location__name__container'>
        {weather ? <h1>{weather.location.name}</h1> : <h1>Selecione uma cidade</h1>}
      </header>

      <div className='overall__container'>
        <div className='overall__container__header'>
          <h2>Clima atual</h2>
          <h3>20:00</h3>
        </div>

        <SummaryContainer weather={weather} />
        <DetailsContainer weather={weather} />
      </div>
    </section>
  );
};

export default Informations;
