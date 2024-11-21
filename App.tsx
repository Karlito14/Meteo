import { Home } from './pages/Home';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import background from '@assets/background.png';

export default function App() {
  return (
    <ImageBackground
      source={background}
      style={styles.background}
      imageStyle={styles.img}
    >
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
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
  },
});
