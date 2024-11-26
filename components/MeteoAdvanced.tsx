import { View, StyleSheet } from 'react-native';
import { Txt } from './Txt';

export const MeteoAdvanced = () => {
  return (
    <View style={styles.container}>
      <Txt style={styles.text}>Meteo Advanced</Txt>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    fontSize: 20,
  },
});
