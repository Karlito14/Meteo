import { MeteoAdvanced } from '@components/MeteoAdvanced';
import { MeteoBasic } from '@components/MeteoBasic';
import { SearchBar } from '@components/SearchBar';
import { StyleSheet, View } from 'react-native';
import { LocationObject } from 'expo-location';
import { useEffect, useState } from 'react';
import { getCurrentLocation } from 'services/services';

export const Home = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);

  const getCoords = async () => {
    const coords = await getCurrentLocation();
    setLocation(coords);
  };

  useEffect(() => {
    getCoords();
  }, []);

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
