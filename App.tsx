import { Home } from './pages/Home';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Forecast } from '@pages/Forecast';

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
      {loaded && (
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: 'fade' }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forecast" component={Forecast} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
