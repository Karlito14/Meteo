import { MeteoAdvanced } from '@components/MeteoAdvanced';
import { MeteoBasic } from '@components/MeteoBasic';
import { SearchBar } from '@components/SearchBar';
import { StyleSheet, View } from 'react-native';

export const Home = () => {
  return (
    <View style={styles.container}>
      <MeteoBasic />
      <SearchBar />
      <MeteoAdvanced />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
