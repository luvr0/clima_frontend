import { CurrentWeather } from '../../../api/services/informationService';
import './CurrentWeatherSummary.css';
import React from 'react';

interface CurrentWeatherSummaryProps {
  weather: CurrentWeather | null;
}

const CurrentWeatherSummary: React.FC<CurrentWeatherSummaryProps> = ({ weather }) => {
  return (
    <div className='current__weather__summary'>
      <img className='current__weather__summary__img' 
           src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/PartlyCloudyNightV2.svg" 
           alt="" />
      <div className='current__weather__summary__primary__container'>
        <span className='current__weather__summary__number'>
          {weather ? weather.current.temp_c : '--'}
        </span>
        <span className='current__weather__summary__celcius'>°C</span>
      </div>
      <div className='current__weather__summary__second__container'>
        <span className='current__weather__summary__title'>
          {weather ? weather.current.condition.text : 'Carregando...'}
        </span>
        <div>
          <span>Sensação térmica</span>
          <span>{weather ? weather.current.feelslike_c : '--'}°</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherSummary;
