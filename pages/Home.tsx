import { MeteoAdvanced } from '@components/MeteoAdvanced';
import { MeteoBasic } from '@components/MeteoBasic';
import { SearchBar } from '@components/SearchBar';
import { StyleSheet, View } from 'react-native';
import { LocationObject } from 'expo-location';
import { useEffect, useState } from 'react';
import { getCurrentLocation } from 'services/services';
import { newMeteoAPI } from 'api/meteo';
import { IWeather } from 'interfaces/interfaces';

export const Home = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [weather, setWeather] = useState<IWeather | null>(null)

  const getCoords = async () => {
    const coords = await getCurrentLocation();
    setLocation(coords);
  };

  const fetchWeather = async (location: LocationObject) => {
    try {
      const weatherResponse: IWeather = await newMeteoAPI.getWeather(location);
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
      fetchWeather(location);
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <MeteoBasic />
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
