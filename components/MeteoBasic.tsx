import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Txt } from './Txt';
import { IMeteoBasic } from '@interfaces/interfaces';
import { Clock } from './Clock';

export const MeteoBasic = ({
  temperature,
  city,
  interpretation,
}: IMeteoBasic) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentClock}>
        <Clock />
      </View>
      <Txt>{city}</Txt>
      {interpretation && <Txt style={styles.label}>{interpretation.label}</Txt>}
      <View style={styles.contentTemp}>
        <Txt style={styles.temp}>{temperature + '°'}</Txt>
        {interpretation && (
          <Image style={styles.img} source={interpretation.image} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  contentClock: {
    alignItems: 'flex-end',
  },
  contentCity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    alignSelf: 'flex-end',
    fontSize: 20,
  },
  contentTemp: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  temp: {
    fontSize: 120,
  },
  img: {
    alignSelf: 'flex-start',
    height: 90,
    width: 90,
  },
});
