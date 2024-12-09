import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { geocodingAPI, meteoApiReverse, newMeteoAPI } from 'api/meteo';
import { Container } from '@components/Container';
import { MeteoAdvanced } from '@components/MeteoAdvanced';
import { MeteoBasic } from '@components/MeteoBasic';
import { SearchBar } from '@components/SearchBar';
import {
  getCurrentLocation,
  getWeatherInterpretation,
} from 'services/services';
import {
  ICoords,
  IPosition,
  IWeather,
  RootStackParamList,
} from '@interfaces/interfaces';

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'Forecast'
>;

export const Home = () => {
  const [location, setLocation] = useState<IPosition | null>(null);
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const navigation = useNavigation<NavigationProps>();

  const getCoords = async () => {
    const { coords } = await getCurrentLocation();
    setLocation({ latitude: coords.latitude, longitude: coords.longitude });
  };

  const getCoordsByCity = async (city: string) => {
    try {
      const coords = await geocodingAPI.fetchCoords(city);
      setLocation(coords);
    } catch (error) {
      console.error(error);
    }
  };

  const getWeather = async (location: IPosition) => {
    try {
      const weatherResponse: IWeather = await newMeteoAPI.fetchWeather(
        location
      );
      setWeather(weatherResponse);
    } catch (error) {
      console.error(error);
    }
  };

  const getCity = async (location: IPosition) => {
    try {
      const cityResponse = await meteoApiReverse.fetchCity(location);
      const { address } = cityResponse;
      setCity(address.city || address.town || address.municipality);
    } catch (error) {
      console.error(error);
    }
  };

  const displayForecastPage = () => {
    if (weather && city) {
      navigation.navigate('Forecast', { city, daily: weather.daily });
    }
  };

  useEffect(() => {
    getCoords();
  }, []);

  useEffect(() => {
    if (location) {
      console.log(location)
      getWeather(location);
      getCity(location);
    }
  }, [location]);

  return (
    <Container>
      <View style={styles.container}>
        {weather && city ? (
          <MeteoBasic
            temperature={weather.current_weather.temperature.toFixed()}
            city={city}
            interpretation={getWeatherInterpretation(
              weather.current_weather.weathercode
            )}
            onPress={displayForecastPage}
          />
        ) : null}
        <SearchBar onSubmit={getCoordsByCity} />
        {weather && (
          <MeteoAdvanced
            sunset={weather.daily.sunset}
            sunrise={weather.daily.sunrise}
            windspeed={weather.current_weather.windspeed}
          />
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
