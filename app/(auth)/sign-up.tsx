import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const SingUp = () => {
  return (
    <View>
      <Text>SingUp</Text>
      <Link href="/(auth)/sign-in">Sign up</Link>
    </View>
  );
};

export default SingUp;
