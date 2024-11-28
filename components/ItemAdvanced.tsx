import { StyleSheet, View } from 'react-native';
import { Txt } from './Txt';

export const ItemAdvanced = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => {
  return (
    <View style={styles.container}>
      <Txt style={styles.value}>{value}</Txt>
      <Txt style={styles.title}>{label}</Txt>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  value: {
    fontSize: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
});
