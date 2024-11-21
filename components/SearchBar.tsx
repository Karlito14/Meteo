import { StyleSheet, Text, View } from 'react-native';

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Text>Search Bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
});
