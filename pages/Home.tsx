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
import { meteoApiReverse, newMeteoAPI } from 'api/meteo';
import { IWeather } from '@interfaces/interfaces';

export const Home = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [city, setCity] = useState<string | null>(null);

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

  const getCity = async (location: LocationObject) => {
    try {
      const cityResponse = await meteoApiReverse.fetchCity(location);
      const {
        address: { municipality, town },
      } = cityResponse;
      setCity(town || municipality);
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
      getCity(location);
    }
  }, [location]);

  console.log(weather);

  return (
    <View style={styles.container}>
      {weather && city ? (
        <MeteoBasic
          temperature={weather.current_weather.temperature.toFixed()}
          city={city}
          interpretation={getWeatherInterpretation(
            weather.current_weather.weathercode
          )}
        />
      ) : null}
      <SearchBar />
      {weather && (
        <MeteoAdvanced
          sunset={weather.daily.sunset}
          sunrise={weather.daily.sunrise}
          windspeed={weather.current_weather.windspeed}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
