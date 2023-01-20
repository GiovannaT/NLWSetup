import { StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold} from '@expo-google-fonts/inter';

import { Home } from './src/assets/screens/Home';
import { Loading } from './src/assets/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold
  })

  if(!fontsLoaded){
    return (
      <Loading/>
    )
  }
  
  return (
    <>
      <Home></Home>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </>
  );
}