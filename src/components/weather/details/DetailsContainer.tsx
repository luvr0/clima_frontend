import { CurrentWeather } from '../../../api/services/informationService';
import DetailsItemLine from './DetailsItemLine';
import './DetailsContainer.css'

const DetailsContainer = ({ weather }: { weather: CurrentWeather | null }) => {
  return (
    <div className='overall__container__details'>
      <DetailsItemLine weather={weather} />
    </div>
  );
};

export default DetailsContainer;
