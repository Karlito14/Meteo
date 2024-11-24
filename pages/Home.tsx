import { MeteoAdvanced } from '@components/MeteoAdvanced';
import { MeteoBasic } from '@components/MeteoBasic';
import { SearchBar } from '@components/SearchBar';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { PARIS_LOCATION } from '@constants';

export const Home = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocation(PARIS_LOCATION);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
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
