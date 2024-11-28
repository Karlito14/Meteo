import { ImageSourcePropType } from 'react-native';
interface IWeather {
  current_weather: CurrentWeather;
  current_weather_units: CurrentWeatherUnits;
  daily: Daily;
  daily_units: DailyUnits;
  elevation: number;
  generationtime_ms: number;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}
interface CurrentWeather {
  interval: number;
  is_day: number;
  temperature: number;
  time: string;
  weathercode: number;
  winddirection: number;
  windspeed: number;
}
interface CurrentWeatherUnits {
  interval: string;
  is_day: string;
  temperature: string;
  time: string;
  weathercode: string;
  winddirection: string;
  windspeed: string;
}
interface Daily {
  sunrise: string[];
  sunset: string[];
  temperature_2m_max: number[];
  time: string[];
  weathercode: number[];
  windspeed_10m_max: number[];
}
interface DailyUnits {
  sunrise: string;
  sunset: string;
  temperature_2m_max: string;
  time: string;
  weathercode: string;
  windspeed_10m_max: string;
}

interface IMeteoBasic {
  temperature: string;
  city: string;
  interpretation: IWeatherInterpretation | undefined;
}
interface IMeteoAdvanced {
  sunrise: string[];
  sunset: string[];
  windspeed: number;
}
interface IWeatherInterpretation {
  codes: number[];
  label: string;
  image: ImageSourcePropType;
}
interface ICity {
  address: Address;
  addresstype: string;
  boundingbox: string[];
  class: string;
  display_name: string;
  importance: number;
  lat: string;
  licence: string;
  lon: string;
  name: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  place_rank: number;
  type: string;
}
interface Address {
  'ISO3166-2-lvl4': string;
  'ISO3166-2-lvl6': string;
  country: string;
  country_code: string;
  county: string;
  municipality: string;
  postcode: string;
  region: string;
  road: string;
  state: string;
  town: string;
}

export { IWeather, IMeteoBasic, IMeteoAdvanced, IWeatherInterpretation, ICity };
