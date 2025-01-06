import { CurrentWeather } from '../../../api/services/informationService';
import DetailsItem from './DetailsItem';
import './DetailsItemLine.css';

const DetailsItemLine = ({ weather }: { weather: CurrentWeather | null }) => {
  const stringList = [
    { title: "Vento", information: `${weather?.current.wind_kph + " km/h" || "Não disponível"}` },
    { title: "Umidade", information: `${weather?.current.humidity + "%" || "Não disponível"}` },
    { title: "Visibilidade", information: `${weather?.current.vis_km + " km" || "Não disponível"}` },
    { title: "Pressão", information: `${weather?.current.pressure_mb + " mb" || "Não disponível"}` },
    { title: "Ponto de orvalho", information: `${weather?.current.dewpoint_c + "°" || "Não disponível"}` }
  ];

  return (
    <div className='overall__container__details_line'>
      {stringList.map((item, index) => (
        <DetailsItem
          key={index}
          title={item.title}
          information={item.information}
        />
      ))}
    </div>
  );
};

export default DetailsItemLine;
