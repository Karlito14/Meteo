import { StyleSheet, TextInput, View } from 'react-native';
import { Txt } from './Txt';

export const SearchBar = ({
  onSubmit,
  error,
}: {
  onSubmit: (city: string) => void;
  error: boolean;
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
        placeholder="Cherche une ville"
        returnKeyType="done"
      />
      {error && (
        <Txt style={styles.error}>Nous n'avons pas trouvé ta ville</Txt>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  input: {
    height: 40,
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
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
  error: {
    color: '#d70000',
    fontSize: 20,
  },
});
