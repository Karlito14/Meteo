import { PARIS_LOCATION, WEATHER_INTERPRATIONS } from '@constants';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

const getCurrentLocation = async () => {
  let { status } = await requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return PARIS_LOCATION;
  }

  let location = await getCurrentPositionAsync({});
  return location;
};

const getWeatherInterpretation = (code: number) => {
  const result = WEATHER_INTERPRATIONS.find((item) =>
    item.codes.includes(code)
  );
  return result;
};

const displayClock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
};

export { getCurrentLocation, getWeatherInterpretation, displayClock };
