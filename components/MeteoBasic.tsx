import { View, StyleSheet, Text } from 'react-native';

export const MeteoBasic = () => {
  return (
    <View style={styles.container}>
      <Text>Meteo Basic</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 2
    }
});
