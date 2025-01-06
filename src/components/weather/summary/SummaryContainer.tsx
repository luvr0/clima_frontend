import { CurrentWeather } from '../../../api/services/informationService';
// import OverviewCurrentTemperature from "./OverviewCurrentTemperature";
import CurrentWeatherSummary from "./CurrentWeatherSummary";
import './SummaryContainer.css';
import React from 'react';

interface SummaryContainerProps {
  weather: CurrentWeather | null;
}

const SummaryContainer: React.FC<SummaryContainerProps> = ({ weather }) => {
  return (
    <div className='overall__container__summary'>
      <CurrentWeatherSummary weather={weather} />
      {/* <OverviewCurrentTemperature weather={weather} /> */}
    </div>
  );
};

export default SummaryContainer;
