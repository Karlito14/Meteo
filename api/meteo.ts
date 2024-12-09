import { ICity, ICoords, IPosition, IWeather } from '@interfaces/interfaces';

class MeteoAPI {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async fetchWeather(location: IPosition) {
    const response = await fetch(
      `${this.url}forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
    );
    const data: Promise<IWeather> = await response.json();
    return data;
  }

  async fetchCity(location: IPosition) {
    const response = await fetch(
      `${this.url}reverse?format=json&lat=${location.latitude}&lon=${location.longitude}`
    );
    const data: Promise<ICity> = await response.json();
    return data;
  }

  async fetchCoords(city: string) {
    const response = await fetch(
      `${this.url}search?name=${city}&count=1&language=fr&format=json`
    );
    const data: Promise<ICoords> = await response.json();
    const { latitude, longitude } = (await data).results[0];
    return { latitude, longitude };
  }
}

const newMeteoAPI = new MeteoAPI('https://api.open-meteo.com/v1/');

const meteoApiReverse = new MeteoAPI('https://nominatim.openstreetmap.org/');

const geocodingAPI = new MeteoAPI('https://geocoding-api.open-meteo.com/v1/');

export { newMeteoAPI, meteoApiReverse, geocodingAPI };
