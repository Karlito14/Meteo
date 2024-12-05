import { Container } from '@components/Container';
import { Txt } from '@components/Txt';
import { useRoute } from '@react-navigation/native';

export const Forecast = () => {
  const { params } = useRoute();
  console.log(params);
  return (
    <Container>
      <Txt>Forecast</Txt>;
    </Container>
  );
};
