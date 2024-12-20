import { Container } from '@components/Container';
import { ForecastItem } from '@components/ForecastItem';
import { Txt } from '@components/Txt';
import { DAYS } from '@constants';
import { RootStackParamList } from '@interfaces/interfaces';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { getWeatherInterpretation } from 'services/services';

type ForecastRouteProp = RouteProp<RootStackParamList, 'Forecast'>;

export const Forecast = () => {
  const { params } = useRoute<ForecastRouteProp>();
  const navigation = useNavigation();

  const backButton = (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Txt>{'<'}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <View style={styles.container_header}>
      {backButton}
      <View style={styles.content_header}>
        <Txt>{params.city}</Txt>
        <Txt style={styles.subtitle}>Prévisions de la semaine</Txt>
      </View>
    </View>
  );

  const forecastList = (
    <View style={styles.container_list}>
      {params.daily.time.map((time, index) => {
        const date = time.split('-').reverse().join('-');
        const image = getWeatherInterpretation(
          params.daily.weathercode[index]
        )?.image!;
        const temp = params.daily.temperature_2m_max[index];
        const day = new Date(time).getDay();

        return (
          <ForecastItem
            key={time}
            image={image}
            day={DAYS[day]}
            date={date}
            temp={temp}
          />
        );
      })}
    </View>
  );

  return (
    <Container>
      {header} {forecastList}
    </Container>
  );
};

const styles = StyleSheet.create({
  container_header: {
    flexDirection: 'row',
  },
  button: {
    width: 30,
  },
  content_header: {
    flex: 1,
    alignItems: 'center',
    marginRight: 30,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
  },
  container_list: {
    marginTop: 20
  }
});
