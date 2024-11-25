import { LocationObject } from 'expo-location';
import { IWeather } from 'interfaces/interfaces';

class MeteoAPI {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async getWeather(location: LocationObject) {
    const response = await fetch(
      `${this.url}latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
    );
    const data: Promise<IWeather> = response.json();
    return data;
  }
}

export const newMeteoAPI = new MeteoAPI(
  'https://api.open-meteo.com/v1/forecast?'
);
