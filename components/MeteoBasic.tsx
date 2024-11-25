import { View, StyleSheet } from 'react-native';
import { Txt } from './Txt';

export const MeteoBasic = () => {
  return (
    <View style={styles.container}>
      <Txt>Meteo Basic</Txt>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 2
    }
});
