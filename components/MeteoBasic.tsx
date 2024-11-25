import { View, StyleSheet, Image } from 'react-native';
import { Txt } from './Txt';

export const MeteoBasic = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentClock}>
        <Txt>Clock</Txt>
      </View>
      <Txt style={styles.city}>City</Txt>
      <Txt style={styles.label}>Label</Txt>
      <View style={styles.contentTemp}>
        <Txt style={styles.temp}>10°</Txt>
        <Image style={styles.img} />
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
  city: {},
  label: {
    alignSelf: 'flex-end',
    transform: [{ rotate: '-90deg' }],
  },
  contentTemp: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  temp: {
    fontSize: 120,
  },
  img: {
    height: 90,
    width: 90,
    backgroundColor: 'white'
  },
});
