import { PARIS_LOCATION } from '@constants';
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

async function getCurrentLocation() {
  let { status } = await requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return PARIS_LOCATION;
  }

  let location = await getCurrentPositionAsync({});
  return location;
}

export { getCurrentLocation };
