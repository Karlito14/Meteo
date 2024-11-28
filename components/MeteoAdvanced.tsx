import { View, StyleSheet } from 'react-native';
import { ItemAdvanced } from './ItemAdvanced';
import { IMeteoAdvanced } from '@interfaces/interfaces';

export const MeteoAdvanced = ({
  sunrise,
  sunset,
  windspeed,
}: IMeteoAdvanced) => {
  const dusk = sunrise[0].split('T')[1];
  const down = sunset[0].split('T')[1];

  return (
    <View style={styles.container}>
      <ItemAdvanced value={dusk} label="Aube" />
      <ItemAdvanced value={down} label="Crépuscule" />
      <ItemAdvanced
        value={windspeed.toFixed().toString() + ' km/h'}
        label="Vent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 15,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 3,
  },

  text: {
    fontSize: 20,
  },
});
