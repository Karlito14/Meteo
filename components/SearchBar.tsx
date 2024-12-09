import { StyleSheet, TextInput, View } from 'react-native';
import { Txt } from './Txt';

export const SearchBar = ({ onSubmit }: { onSubmit: () => void }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onSubmitEditing={onSubmit}
        placeholder="Cherche une ville"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: 'white',
    fontFamily: 'Alata-Regular',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
