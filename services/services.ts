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
  const result = WEATHER_INTERPRATIONS.find((item) => item.codes.includes(code));
  return result;
};

export { getCurrentLocation, getWeatherInterpretation };
