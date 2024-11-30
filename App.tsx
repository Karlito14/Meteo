import { Home } from './pages/Home';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Forecast } from '@pages/Forecast';

const background = require('@assets/images/background.png');
const Stack = createNativeStackNavigator();
const navTheme = {
  colors: {
    background: 'transparent',
  },
  dark: false,
  fonts: {
    body: 'Alata-Regular',
    heading: 'Alata-Regular',
    monospace: 'Alata-Regular',
  },
};

export default function App() {
  const [loaded, error] = useFonts({
    'Alata-Regular': require('./assets/fonts/Alata-Regular.ttf'),
  });

  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        source={background}
        style={styles.background}
        imageStyle={styles.img}
      >
        <SafeAreaView style={styles.container}>
          {loaded && (
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="Home"
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Forecast" component={Forecast} />
            </Stack.Navigator>
          )}
        </SafeAreaView>
      </ImageBackground>
    </NavigationContainer>
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
    margin: 20,
  },
});
