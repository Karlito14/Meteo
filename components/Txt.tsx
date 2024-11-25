import { StyleSheet } from 'react-native';
import { Text } from 'react-native';

export const Txt = ({ children, style }: { children: string; style?: any }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Alata-Regular',
    color: 'white',
  },
});
