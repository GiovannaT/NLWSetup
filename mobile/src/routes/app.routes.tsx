import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { New } from "../assets/screens/New";
import { Home } from "../assets/screens/Home";
import { Habit } from "../assets/screens/Habit";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home}></Screen>

      <Screen name="new" component={New}></Screen>

      <Screen name="habit" component={Habit}></Screen>
    </Navigator>
  );
}
