import { IForecastitem } from '@interfaces/interfaces';
import { Image, StyleSheet, View } from 'react-native';
import { Txt } from './Txt';

export const ForecastItem = ({ image, day, date, temp }: IForecastitem) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Txt style={styles.day}>{day}</Txt>
      <Txt style={styles.date}>{date}</Txt>
      <Txt style={styles.temp}>{temp.toFixed(0).toString() + '°C'}</Txt>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  day: {
    fontSize: 20,
  },
  date: {
    fontSize: 20,
  },
  temp: {
    fontSize: 20,
    width: 50,
    textAlign: 'right',
  },
});
