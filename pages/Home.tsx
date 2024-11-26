import { MeteoAdvanced } from '@components/MeteoAdvanced';
import { MeteoBasic } from '@components/MeteoBasic';
import { SearchBar } from '@components/SearchBar';
import { StyleSheet, View } from 'react-native';
import { LocationObject } from 'expo-location';
import { useEffect, useState } from 'react';
import {
  getCurrentLocation,
  getWeatherInterpretation,
} from 'services/services';
import { newMeteoAPI } from 'api/meteo';
import { IWeather, IWeatherInterpretation } from 'interfaces/interfaces';
import { WEATHER_INTERPRATIONS } from '@constants';

export const Home = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [weather, setWeather] = useState<IWeather | null>(null);

  const getCoords = async () => {
    const coords = await getCurrentLocation();
    setLocation(coords);
  };

  const getWeather = async (location: LocationObject) => {
    try {
      const weatherResponse: IWeather = await newMeteoAPI.fetchWeather(
        location
      );
      setWeather(weatherResponse);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoords();
  }, []);

  useEffect(() => {
    if (location) {
      getWeather(location);
    }
  }, [location]);

  console.log(weather);

  return (
    <View style={styles.container}>
      {weather && (
        <MeteoBasic
          temperature={weather.current_weather.temperature.toFixed()}
          city="Paris"
          interpretation={getWeatherInterpretation(weather.current_weather.weathercode)}
        />
      )}
      <SearchBar />
      <MeteoAdvanced />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
