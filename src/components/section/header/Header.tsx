import { getCitys, getWeather, City, CurrentWeather, getUserIpAddress } from '../../../api/services/informationService';
import React, { useState, ChangeEvent, useEffect } from 'react';
import './Header.css';

interface HeaderProps {
  onWeatherUpdate: (weather: CurrentWeather) => void;
}

const Header: React.FC<HeaderProps> = ({ onWeatherUpdate }) => {
  const [query, setQuery] = useState<string>('');
  const [suggestions, setSuggestions] = useState<City[]>([]);

  const fetchWeatherByIP = async () => {
    try {
      const response = await getUserIpAddress();
      const weather = await getWeather(response.data);
      onWeatherUpdate(weather);
    } catch (error) {
      console.error('Erro ao buscar clima pelo IP:', error);
    }
  };

  useEffect(() => {
    fetchWeatherByIP();
  }, []);

  const fetchSuggestions = async (cityName: string) => {
    try {
      const { cityList } = await getCitys(cityName);
      setSuggestions(cityList);
    } catch (error) {
      console.error('Erro ao buscar sugestões:', error);
      setSuggestions([]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = async (suggestion: City): Promise<void> => {
    setQuery("")
    setSuggestions([]);

    try {
      const weather = await getWeather(suggestion.name);
      onWeatherUpdate(weather);
    } catch (error) {
      console.error('Erro ao buscar clima da cidade:', error);
    }
  };

  return (
    <header className='header__container'>
      <div className='header__container__search'>
        <input
          className='header__container__search__input'
          type="text"
          placeholder='Pesquisar por local'
          value={query}
          onChange={handleInputChange}
        />
        <button className='header__container__search__button'></button>
        <span className='header__container__search__icon'></span>

        {suggestions.length > 0 && (
          <ul className='header__container__suggestions'>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className='header__container__suggestion-item'
              >
                {suggestion.name}, {suggestion.region}, {suggestion.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
