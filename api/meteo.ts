import { LocationObject } from 'expo-location';
import { ICity, IWeather } from '@interfaces/interfaces';

class MeteoAPI {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async fetchWeather(location: LocationObject) {
    const response = await fetch(
      `${this.url}forecast?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
    );
    const data: Promise<IWeather> = response.json();
    return data;
  }

  async fetchCity(location: LocationObject) {
    const response = await fetch(
      `${this.url}reverse?format=json&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
    );
    const data: Promise<ICity> = response.json();
    return data;
  }
}

const newMeteoAPI = new MeteoAPI('https://api.open-meteo.com/v1/');

const meteoApiReverse = new MeteoAPI('https://nominatim.openstreetmap.org/');

export { newMeteoAPI, meteoApiReverse };
