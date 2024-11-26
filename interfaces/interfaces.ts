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

interface IWeatherInterpretation {
  codes: number[];
  label: string;
  image: ImageSourcePropType;
}

export { IWeather, IMeteoBasic, IWeatherInterpretation };
