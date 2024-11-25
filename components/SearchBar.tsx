import { StyleSheet, View } from 'react-native';
import { Txt } from './Txt';

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Txt>Search Bar</Txt>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});
