import { StyleSheet } from 'react-native';
import { Txt } from './Txt';
import { displayClock } from 'services/services';
import { useEffect, useState } from 'react';

export const Clock = () => {
  const [time, setTime] = useState(displayClock());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(displayClock());
    });

    return () => clearInterval(intervalId);
  }, []);

  return <Txt style={styles.clock}>{time}</Txt>;
};

const styles = StyleSheet.create({
  clock: {
    fontSize: 15,
  },
});
