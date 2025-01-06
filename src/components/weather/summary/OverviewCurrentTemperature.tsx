import { CurrentWeather } from '../../../api/services/informationService';
import './OverviewCurrentTemperature.css';
import React from 'react';

interface OverviewCurrentTemperatureProps {
  weather: CurrentWeather | null;
}

const OverviewCurrentTemperature: React.FC<OverviewCurrentTemperatureProps> = ({ weather }) => {
  return (
    <div className='overview__current__temperature'>
      <h1>
        {weather ? `Expectativa de ${weather.current.condition.text.toLowerCase()}.` : 'Carregando...'}
      </h1>
    </div>
  );
};

export default OverviewCurrentTemperature;
