import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
const background = require('@assets/images/background.png');

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground
      source={background}
      style={styles.background}
      imageStyle={styles.img}
    >
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

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
    margin: 20,
  },
});
