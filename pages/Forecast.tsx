import { Container } from '@components/Container';
import { ForecastItem } from '@components/ForecastItem';
import { Txt } from '@components/Txt';
import { RootStackParamList } from '@interfaces/interfaces';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

type ForecastRouteProp = RouteProp<RootStackParamList, 'Forecast'>;

export const Forecast = () => {
  const { params } = useRoute<ForecastRouteProp>();
  const navigation = useNavigation();

  console.log(params);

  const backButton = (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Txt>{'<'}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <View style={styles.container}>
      {backButton}
      <View style={styles.content}>
        <Txt>{params.city}</Txt>
        <Txt style={styles.subtitle}>Prévisions de la semaine</Txt>
      </View>
    </View>
  );

  return (
    <Container>
      {header}
      <View>
        <ForecastItem
          image={require('@assets/images/clouds.png')}
          day="VEN"
          date="06-12-2024"
          temp={20}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    width: 30,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginRight: 30,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
  },
});
