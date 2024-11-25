import { Home } from './pages/Home';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
const background = require('@assets/images/background.png');

export default function App() {
  const [loaded, error] = useFonts({
    'Alata-Regular': require('./assets/fonts/Alata-Regular.ttf'),
  });

  return (
    <ImageBackground
      source={background}
      style={styles.background}
      imageStyle={styles.img}
    >
      <SafeAreaView style={styles.container}>{loaded && <Home />}</SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  img: {
    resizeMode: 'contain',
    opacity: 0.75,
  },
  container: {
    flex: 1,
    margin: 20
  },
});
