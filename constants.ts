import { LocationObject } from 'expo-location';
import { IWeatherInterpretation } from '@interfaces/interfaces';
import { Theme } from '@react-navigation/native';

const PARIS_LOCATION: LocationObject = {
  timestamp: Date.now(),
  coords: {
    accuracy: null,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    latitude: 48.85,
    longitude: 2.35,
    speed: null,
  },
};

const WEATHER_INTERPRATIONS: IWeatherInterpretation[] = [
  {
    codes: [0],
    label: 'Ensoleillé',
    image: require('@assets/images/sun.png'),
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: 'Nuageux',
    image: require('@assets/images/clouds.png'),
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
    label: 'Pluvieux',
    image: require('@assets/images/rain.png'),
  },
  {
    codes: [71, 73, 75, 77],
    label: 'Neigeux',
    image: require('@assets/images/snow.png'),
  },
  {
    codes: [96, 99],
    label: 'Orageux',
    image: require('@assets/images/thunder.png'),
  },
];

const DAYS = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];

const FONTS = {
  regular: 'Alata-Regular',
  medium: 'Alata-Regular',
  bold: 'Alata-Bold',
  heavy: 'Alata-Bold',
};

const NAV_THEME: Theme = {
  dark: false,
  colors: {
    background: 'transparent',
    primary: 'transparent',
    card: 'transparent',
    text: 'transparent',
    border: 'transparent',
    notification: 'transparent',
  },
  // Ajout des polices personnalisées
  fonts: FONTS,
};

export { PARIS_LOCATION, WEATHER_INTERPRATIONS, DAYS, NAV_THEME };
