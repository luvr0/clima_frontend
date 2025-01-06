import axios from 'axios';

export interface CurrentWeather {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
    wind_kph: number;
    pressure_mb: number;
    humidity: number;
    dewpoint_c: number;
    vis_km: number;
    feelslike_c: number;
  };
}

export interface City {
  name: string;
  region: string;
  country: string;
}


export const getWeather = async (cityName: string): Promise<CurrentWeather> => {
  try {
    const response = await axios.get<CurrentWeather>(`https://localhost:7049/api/CurrentWeather/city/${cityName}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar clima da cidade: ", error);
    throw error;
  }
};

export const getCitys = async (cityName: string): Promise<{ cityList: City[] }> => {
  try {
    const response = await axios.get(`https://localhost:7049/api/CurrentWeather/city/list/${cityName}`);
    return { cityList: response.data };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao buscar cidades: ", error.message);
    } else {
      console.error("Erro desconhecido: ", error);
    }
    throw error;
  }
};

export const getUserIpAddress = async () => {
  try {
    return await axios.get(`https://localhost:7049/api/UserIpAddress/ip`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao obter IP do usuario: ", error.message);
    } else {
      console.error("Erro desconhecido: ", error);
    }
    throw error;
  }
}