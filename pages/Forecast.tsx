import { Container } from '@components/Container';
import { Txt } from '@components/Txt';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export const Forecast = () => {
  const { params } = useRoute();
  const navigation = useNavigation();

  console.log(params);

  const backButton = (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Txt>{'<'}</Txt>
    </TouchableOpacity>
  );

  const header = (
    <View style={styles.container}>
      {backButton}
      <View style={styles.content}>
        <Txt>{params?.city}</Txt>
        <Txt style={styles.subtitle}>Prévisions de la semaine</Txt>
      </View>
    </View>
  );

  return <Container>{header}</Container>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    width: 30
  },
  content: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'blue',
    marginRight: 30,
  },
  subtitle: {
    fontSize: 20
  },
});
